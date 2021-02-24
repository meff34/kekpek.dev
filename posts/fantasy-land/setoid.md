---
slug: fantasy-land/setoid
tag: fantasy-land
chapter: 3
title: Setoid
description: Сетоиды
date: 2021-02-12
---


# Setoid

**Поздравляю!** Ты освоил [основы `daggy`](/fantasy-land/daggy), проникся введением в [сигнатуры типов](/fantasy-land/signatures) и готов приступить к путешествию через волшебные земли Fantasy land. Первый пункт на нашей карте – setoid.

**Setoid** – это любой тип, подразумевающий идею **эквивалентности**. Ты уже используешь setoid'ы (числа, строки, логический тип) – каждый раз, когда ты обращаешься к оператору `==`, так что эта тема не должна показаться сложной. Кроме того, ты используешь штуки, которые *не являются* setoid'ами. Например, **функции**.

> Это может показаться странным, но на самом деле – как мы можем *достоверно* знать, что две функции эквивалентны? Компилятор может заверить нас, что `100 * 10` эквивалентно `1000`. Однако у компилятора не найдётся достаточно смелости, чтобы заявить, что `x => x * x` эквивалентно `x => Math.pow(x, 2)`. Это на самом деле не самая тривиальная вещь! *

Итак, чтобы тип был совместимым по спецификации Fantasy Land setoid'ом, на его прототипе должен быть определён метод `equals` со следующей сигнатурой:

```haskell
equals :: Setoid a => a ~> a -> Boolean
```

Надеюсь, не очень страшно. Просто способ указать, что одна сущность эквивалентна другой. Давай реализуем несколько setoid'ов на основе кода из [первой статьи](/fantasy-land/daggy):

```js
// Проверка на эквивалентность точек
// equals :: Coord ~> Coord -> Bool
Coord.prototype.equals = function (that) {
  return this.x === that.x
      && this.y === that.y
      && this.z === that.z
}

// Проверка каждой точки с помощью Coord.equals
// equals :: Line ~> Line -> Bool
Line.prototype.equals = function (that) {
  return this.from.equals(that.from)
      && this.to.equals(that.to)
}

// Одна "истина" должна совпадать со второй
// equals :: Bool ~> Bool -> Bool
Bool.prototype.equals = function (that) {
  return this.is(Bool.True) === that.is(Bool.True)
}

// Проверяем головы списков, затем их хвосты
// equals :: Setoid a => List a ~> List a -> Bool
List.prototype.equals = function (that) {
  return this.cata({
    // Сравнение двух разных setoid'ов
    Cons: (head, tail) =>
      head.equals(that.head) // первый, a
        && tail.equals(that.tail), // и второй, [a]
    Nil: () => that.is(List.Nil)
  })
}
```

Ты уловил суть, да? Для нескольких конструкторов мы производим проверки для соответствующего **конструктора**. Если конструктор(ы) принима(ет/ют) аргументы, мы, вероятно, производим проверки и для аргументов. Очевидно, если мы производим эти проверки, то **аргументы тоже должны быть `setoid`'ами**, иначе как мы могли бы удостовериться в их эквивалентности?

Это и есть причина, по которой на методе `equals` типа `List` есть ограничение по типу (элементы списка обязательно должны быть `setoid`'ами): мы должны иметь возможность проверить *всю* структуру, целиком и полностью!

К сожалению, имеется кособокий побочный эффект от использования javascript: мы должны использовать `===` или `.equals`, отталкиваясь от типа сравниваемых значений – являются ли они примитивами, или нет. Грустненько. В других языках мы могли бы **переопределить** поведение оператора `===` для собственных типов, но не в javascript. Ты, конечно, можешь определить `.equals` на прототипах примитивов, но это считается плохой практикой (и называется "манкипатчинг"). *Никогда не играйся со стандартными прототипами*.

Как бы то ни было, эти имплементации `.equals` достаточно симпатичные, не так ли?

---

Все структуры Fantasy Land сопровождаются законами. Они должны соблюдаться для корректности имплементации. `Setoid` – не исключение. Для полной уверенности, что твой `setoid` будет совместим с другими библиотеками и алгоритмами, нужно помнить о трёх простых вещах. 

Всегда:
- `a.equals(a) === true`, закон **рефлексивности**.
- `a.equals(b) === b.equals(a)`, закон **симметрии** или закон **коммутативности** – перемена мест операндов не влияет на результат. А вот операция вычитания *не коммутативна*, как и [некоторые другие](https://www.quora.com/Is-floating-point-addition-commutative-and-associative), которые могут тебя позабавить.
- Если истинно `a.equals(b)` и `b.equals(c)`, то `a.equals(c)` тоже истинно. Это закон **транзитивности**.

Можно с лёгкостью убедиться, что эти законы исполняются всеми написанными выше имплементациями `.equals`, *до тех пор, пока мы соблюдаем сигнатуру!*

Если ни один из этих законов не озадачил тебя, то у меня отличные новости! Это значит, что у тебя хорошая интуиция сущности `Setoid`'а. Позже мы познакомимся с более сложными структурами и такая твоя интуиция очень пригодится для понимания, как эти структуры *использовать*.

Если теперь ты хочешь поупражняться, то почему бы не реализовать метод `.equals` для встроенного типа `Array` так, чтобы сделать любой массив `Setoid`'ом? Определи метод на `Array.prototype`, я никому не расскажу б этом. И не забудь убедиться, что твой `Setoid` удовлетворяет законам, что мы обсуждали выше.

Также, если бы ты захотел, смог бы с лёгкостью **получить** функцию `notEquals` благодаря нашему прекрасному `Setoid`'у и его методу `.equals`:

```js
// notEquals :: Setoid a => a -> a -> Bool
const notEquals = x => y => ...
```


---

If you’re not desperate for exercises, (or you’ve managed to sate your burning desire at long last), shall we move onto what the point of all this fuss is? If we have formal definitions of things like Setoid (however straightforward it may be), we can define sensible interfaces for working with all sorts of data. Consider this function:

```
nub :: Setoid a => [a] -> [a]
```

I think nub might be my favourite name of any function. In practice, nub returns a copy of the given array with the duplicates removed. That’s it! You might also have heard it called uniq. At first glance, this is easy to write in JavaScript:

```
const nub = xs => xs.filter((x, i) => xs.indexOf(x) === i)
```

This is okay, but we run into a problem: for non-primitive structures, this only works if equivalent values always inhabit the same space in memory. This, however, is not usually the case: if we try [[]].indexOf([]), we get back -1, even though we can clearly see [] in that array! How could we fix this? Setoid to the rescue!

```js
// indexOf :: Setoid a => [a] -> a -> Int
const indexOf = xs => x => {
    for (let i = 0; i < xs.length; i++)
      if (xs[i].equals(x)) return i
    
    return -1
}

// nub_ :: Setoid a => [a] -> [a]
const nub_ = xs => xs.filter(
  (x, i) => indexOf(xs)(x) === i
)
```

Now, we have a function that will work for any array of a Setoid type. If we know our function will be used responsibly (that is, only ever with arrays of a Setoid type), we could even add an exception to make it work for primitives - exactly how Ramda’s equality works! Goodness, would you look at all this Polymorphism.

I think I most often see mention of Setoid (and Eq, as they call it in the Haskell world) among List and Array functions, which give plenty of opportunities for exercises to cement your understanding:

- Write a function to determine whether a given list’s values form a palindrome (e.g. whether a list is equivalent to itself reversed). We’ll need a Setoid instance for the inner type to make sure it’s nice and general. As a small hint, you could write a naïve solution with that zipWith function we mentioned earlier…
- Use daggy to build a Set type that stores a unique set of values; you can even reuse nub_! You’ll need methods for adding and removing elements, and the former will need a check to see whether the element already exists in the internal store (probably an array).

Setoid is, without a doubt, the simplest structure within the Fantasy Land spec, but that makes it a really good one to start with. For most, the intuition required to understand this one will be perfectly natural, and none of the laws should come as a shock.

Don’t get too cosy, though! Next time, we’ll move onto a far more weird and wonderful structure: the semigroup. Ooer.

Until then, I hope you’ve enjoyed this post. Please get in touch with any feedback and suggestions - I really want to make this series as useful as possible! - and don’t hesitate to ask for more examples, exercises, or explanations. Oh, and, as always:

Береги себя ❤️

---

*\* Важный нюанс здесь в том, что понятие эквивалентности **гораздо глубже**, чем эквивалентность указателей. Просто попробуй ввести `(x => x) === (x => x)` в Node REPL.*

