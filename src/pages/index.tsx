import React from "react"

const Pek = ({ n }: { n: number }) => <span>{n}</span>

const Home = () => (
  <div>
    <Pek n={23} />
  </div>
)

export default Home
