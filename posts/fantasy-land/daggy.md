---
slug: fantasy-land/daggy
tag: fantasy-land
chapter: 1
title: Daggy
description: Библиотека daggy
---


# Daggy

Снова привет, интернет! Как фанатик ФП и JavaScript-разработчик, я провожу **очень много** времени, размышляя о пересечении этих двух сфер. В этой серии статей мы тесно познакомимся со спецификацией [Fantasy Land](https://github.com/fantasyland/fantasy-land), а также разберём примеры использования её тайпклассов (typeclasses). Но для начала нам нужно познакомиться с [`daggy`](https://github.com/fantasyland/daggy).

Daggy – это *крошечная* библиотека, служащая для описания **типов-сумм** (sum types) в программах, написанных в парадигме ФП. Не будем пока особо задумываться, что это значит, а сфокусируемся на двух функциях, экспортируемых этой библиотекой: `tagged` и `taggedSum`.

## tagged(typeName, fields)

```js
import { tagged } from 'daggy'
```

Это очень простая функция, предназначенная для создания типов с единственным конструктором. Другими словами, это способ хранить данные со строгой структурой (как вариант, модели):

```js
// Координата в трёхмерном пространстве.
// Coord :: (Int, Int, Int) -> Coord
const Coord = tagged('Coord', ['x', 'y', 'z'])

// Линия между двумя координатами.
// Line :: (Coord, Coord) -> Line
const Line = tagged('Line', ['from', 'to'])
```

Результат достаточно интуитивен:

```js
// Мы можем добавлять методы...
Coord.prototype.translate =
  function(x, y, z) {
    // Поля "модели" имеют имена
    return Coord(
      this.x + x,
      this.y + y,
      this.z + z
    )
  }

// Автозаполнение именованных полей
const origin = Coord(0, 0, 0)

const myLine = Line(
  origin,
  origin.translate(2, 4, 6)
)
```

Ничего пугающего, если тебе знакомы объекты в JavaScript: всё, что делает функция `tagged` – она создаёт функцию-конструктор, которая, в свою очередь, создаёт объекты с определёнными полями. **И всё.**  Лёгонькая, крошечная утилитка для создания конструкторов объектов с определёнными полями.

## taggedSum(typeName, constructors)

```js
import { taggedSum } from 'daggy'
```

Теперь немного интереснее. Давай подумаем о типе boolean: он имеет два значения – `True` и `False`. Для описания структуры `Bool` нам необходимо создать тип с несколькими конструкторами (то, что мы называем **типом-суммой**):

```jsx
const Bool = taggedSum('Bool', {
  True: [],
  False: [],
})
```

Различные формы нашего типа мы называем его **конструкторами (type constructors)**: в приведённом выше случае это `True` и `False`, оба не имеют аргументов. Как насчёт создания более сложного типа на основе примера из `tagged`?

```jsx
const Shape = taggedSum('Shape', {
  // Square :: (Coord, Coord) -> Shape
  Square: ['topleft', 'bottomright'],

  // Circle :: (Coord, Number) -> Shape
  Circle: ['centre', 'radius']
})
```

В отличие от boolean, наши конструкторы типа имеют некие значения. Они принимают *разные* аргументы, в зависимости от того, какой конструктор мы используем. Но мы абсолютно точно знаем, что `Circle` и `Square` являются конструкторами типа `Shape`. Как мы можем это использовать?

```jsx
Shape.prototype.translate =
  function(x, y, z) {
    return this.cata({
      Square: (topleft, bottomright) =>
        Shape.Square(
          topleft.translate(x, y, z),
          bottomright.translate(x, y, z)
        ),

      Circle: (centre, radius) =>
        Shape.Circle(
          centre.translate(x, y, z),
          radius
        )
    })
  }

Shape
  .Square(Coord(2, 2, 0), Coord(3, 3, 0))
  .translate(3, 3, 3) // Square(Coord(5, 5, 3), Coord(6, 6, 3))

Shape
  .Circle(Coord(1, 2, 3), 8)
  .translate(6, 5, 4) // Circle(Coord(7, 7, 7), 8)
```

Как и ранее, мы определяем методы на прототипе `Shape`. Однако, `Shape` – это *не конструктор*, а *тип*. Конструкторы этого типа – `Shape.Square` и `Shape.Circle`.

Это значит, что при определении метода мы должны описать что-то, корректно работающее для *всех* форм типа `Shape`, а `this.cata` – это киллерфича библиотеки `daggy`. *Кстати, `cata` – это сокращение от [catamorphism](http://www.tomharding.me/2017/02/24/reductio-and-abstract-em/).*

Всё, что нам нужно – это передать в функцию `cata` объект вида `{ constructor: handler }` , а `handler`, соответствующий нужному конструктору, будет вызван при исполнении метода. Как показано выше, теперь у нас есть метод `translate`, который работает для обеих форм типа `Shape`!

Мы даже можем описать методы для нашего типа `Bool`:

```jsx
const { True, False } = Bool

// Инвертирование значения Boolean.
Bool.prototype.invert = function() {
  return this.cata({
    False: () => True,
    True: () => False
  })
}

// Сокращение для Bool.prototype.cata
Bool.prototype.thenElse = function(then, or) {
  return this.cata({
    True: then,
    False: or
  })
}
```

Как видишь, для конструкторов без аргументов мы используем `handler`'ы без аргументов. Также обрати внимание: различные контструкторы одного и того же типа-суммы могут иметь **разное количество аргументов**. И **типы** у них могут быть разные. Это будет *очень* важно, когда мы перейдём к примерам структур из Fantasy Land.

На этом всё про `taggedSum`: эта функция позволяет нам создавать **типы с несколькими конструкторами** и удобно описывать методы для этих типов.

## `List` but not least...

Как заключительный пример использования `taggedSum` (я надеюсь, `tagged` показалась тебе достаточно простой), ниже приведена реализация связного списка и нескольких полезных функций:

```jsx
const List = taggedSum('List', {
  Cons: ['head', 'tail'], Nil: []
})

List.prototype.map = function (f) {
  return this.cata({
    Cons: (head, tail) => List.Cons(
      f(head), tail.map(f)
    ),

    Nil: () => List.Nil
  })
}

// "Статический" метод для удобства.
List.from = (xs) =>
  xs.reduceRight(
    (acc, x) => List.Cons(x, acc),
    List.Nil
  )

// И конвертация обратно, опять же для удобства!
List.prototype.toArray = function () {
  return this.cata({
    Cons: (x, acc) => [x].concat(acc.toArray()),

    Nil: () => []
  })
}

List.from([1, 2, 3])
  .map(x => x + 2)
  .toArray() // [3, 4, 5]
```

Конечно же, мы можем построить список с помощью двух конструкторов, `Cons` и `Nil` (как мы сделали с `[x, ...xs]` и `[]` в моём [прошлом посте](http://www.tomharding.me/2017/02/24/reductio-and-abstract-em/)), при этом для каждого списка будет существовать соответствующий массив (мы называем это "изоморфизм"). Например, `[1, 2, 3]` стновится `Cons(1, Cons(2, Cons(3, Nil)))`, так что преобразование *любого* списка становится достаточно очевидно.

---

Это **всё**, что тебе нужно знать о `daggy` для понимания Fantasy Land! Если хочешь закрепить понимание, почему бы не описать ещё несколько методов массивов для типа `List`? Например, `filter` или `reduce`.

Также, перед тем, как с головой погружаться в структуры Fantasy Land, нам с тобой нужно обсудить ещё одну тему: сигнатуры типов.

А пока, береги себя! ❤️

###### [Ссылка на оригинал](http://www.tomharding.me/2017/03/03/fantas-eel-and-specification/)
