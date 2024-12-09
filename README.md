# Traveling Salesperson Problem -- Local Search

This exercise is about the Traveling Salesperson Problem I mentioned in the
lecture on NP-hard problems -- given a set of cities, determine the length of
the shortest tour that visits all of them. We can get from any city to any other
city, i.e. the graph of cities is completely connected. We consider the version
of the Traveling Salesperson Problem that finds the shortest tour to visit $n$
cities, starting at a city and ending at the $n$ th city; it *does not* go
back to the start. The start city may be any of the cities. Remember that the
graph for a TSP is undirected, i.e. the cost is the same in either direction.

The 2-opt algorithm for solving the Traveling Salesperson Problem is a
randomized local search algorithm that, at each iteration, reverses part of the
route. It starts with a random route (this is the randomized part), and changes
part of the route in each step (this is the local search part, sprinkled with
more randomness). The pseudocode for one iteration is as follows:

```javascript
2optSwap(route, i, k)
  cities 1 to i-1 stay in the order they are
  cities i to k are reversed
  cities k + 1 to n stay in the order they are
```

For example, if I call the above function with route A--B--C--D--E--F, $i=2$,
$k=4$, the resulting route is A--B--E--D--C--F.

The algorithm starts with a random route; if the new route at the end of an
iteration decreases the total length, it is retained as the current incumbent.
The incumbent after the final iteration is returned as the solution.

Implement the 2-opt algorithm, which repeatedly runs the above steps. Your
implementation needs to fix two design parameters that I have left open. First,
you need to design a stopping criterion -- when would it make sense to stop and
return the shortest route found so far rather than trying another iteration?
Second, design a way to choose $i$ and $k$ -- note that they need to be
different in subsequent iterations, as one iteration would simply undo what
the previous one did otherwise. Start with the template I provided in `code.js`.
Describe in your code how you designed your stopping criterion and ways of
choosing $i$ and $k$ and why.

The function takes a distance matrix (the adjacency matrix for the graph where
the values in the cells are the distances between the corresponding cities) and
returns the length of the shortest tour (not the tour itself).

Test your new function; I've provided some basic testing code in `code.test.js`.

## Runtime Analysis

What is the worst-case asymptotic time complexity of your implementation? What
is the worst-case asymptotic memory complexity? Add your answer, including your
reasoning, to this markdown file.

The worst-case asymptotic time complexity of my implementation would be $O(n! * n^3)$. The reason for this is when breaking down the implementation, the random start function needs to generate a random route by shuffling an array of size n. This has a complexity of $O(n)$ due to the fact that it needs to iterate through the array in order to preform the swaps. Next the calculate route function computes the total distance of a given route. The route has a length of n so once the function iterates through the route, we receive a time complexity of $O(n)$. Next the required 2-opt swap function focuses on creating a new route by slicing and reversing pieces of the origional route. Both these operations have a complexity of $O(n)$. Finally within the main functionality of this program, the while loop continues as long as improvements can be made. The outer loop runs for each city so for $O(n)$ time. The inner loop also runs for this sae time, because it fruns for each possible swap. Each swap that happens, requires the creation of a new route and then calculating its distance, which also takes $O(n)$ time. Therefore, the nested loops have a time complexity of $O(n^3)$. We also need to acknowledge the complexity of the number of times a route and an improving route can be found. The number of times a route can be found is (n!). This means that as the number of cities increases the probability of finding an improving route has become drastically harder. We need to acknowledge this because our complexity is based off of our ability to find an improving route. Once we combine all the components, now including the route complexity, this is where we get our final worst time complexity of $O(n! * n^3)$. The memory complexity worst case would be different. It would be $O(n^2)$ because the input distance matrix is n*n, which requires $O(n^2)$ space. Then the route array and the temporary array in the 2-opt both require $O(n)$ space. The functions themselves, such as the random start, route calculation, and the two opt itself don't use additional space other than from their constant memory used for the inputs and outputs. Once we combine these, we see that the worst memory complexity would be $O(n^2)$.


These are the sources that I used to help get a further explanation of this process. I also communicated with Collin and Nolan about how to approach this problem, getting an idea of where to start. 

https://www.youtube.com/watch?v=SwwberV8CT0
https://en.wikipedia.org/wiki/2-opt
https://slowandsteadybrain.medium.com/traveling-salesman-problem-ce78187cf1f3

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.
