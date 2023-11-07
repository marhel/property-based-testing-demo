# property-based-testing-demo
Some sample tests I threw together for my talk on Property Based Testing

# How to come up with properties

* Facts​
* Inverses or duals​
* Known good (oracle)​

​Practice makes perfect

## Facts
* Something general about the result​
    * (Not) null / negative / empty <if precondition>​
    * Same result doing it once or multiple times (Idempotent)​
        * “Flag invoice not paid in time”​
        * Add/remove with set semantics​
* Something about the result in relation to the inputs​
    * (Not) greater / equal / less in length / complexity <if precondition>​
  
* Something about observable side effects​
    * Value has (not) changed <if precondition>​
    * “Place order increases total order value”​
    * “A delivery increases total stock value”​

* Something general about the execution ​
    * Should not crash (fuzzing) ​
    * Should (not) throw an exception <if precondition>​

* Anything you'd write an assertion about ​
    * A property to verify it is always / never hit <if precondition>​
    * Design by Contract (Bertrand Meyer) ​

## Inverses or duals​

* Encode/decode​
* Write/read​
* Encrypt/decrypt​
* Serialize/deserialize​
* Write/delete ​
* Do/undo​
* Order/cancel order​
* Invoice/credit invoice​
* ...​

## Known good (oracle)​ (existing code)​
* Old (mostly correct) version​
* 3rd party library​
* Shell out to some command line tool ​
* Collect samples from existing app, compare in new app​

## Known good (oracle)​ (new code)​
* You implement two versions​
* Real + One that is more easily verified to be correct​
* Idealistic​
    * A Database can be emulated as an in-memory dictionary (Stateful PBT)​
    * maybe not thread safe, insecure, not persistent, all sorts of compromises​

* Unoptimized​
    * naive implementation​
    * brute-force algorithm
    * single-threaded version​
    