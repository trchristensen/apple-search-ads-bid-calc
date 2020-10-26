# simple apple search ads bid increase/decrease calculator

Basically, this is only useful for me.
It takes two arguments:
  -cpt (cost per tap)
  -projection (1 day projected profit %)

If the projection is UNDER 150%, it will calculate a LOWER bid amount (or new cpt).
If the projection is OVER 150%, it will calculate a HIGHER bid amount.

### Installation

requires [Node.js](https://nodejs.org/) to run
```sh
git clone https://github.com/trchristensen/apple-search-ads-bid-calc.git
cd apple-search-ads-big-calc
npm install
npm i -g
```

### How to Use

after installation, the function will be globally installed.
from any terminal, type
```sh
bid
```

example: 

```sh
bid -c 1.50 -p 180
```

after -c is the cpt amount.
after -p is the projection amount.

That's it.
