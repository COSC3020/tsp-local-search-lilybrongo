
function tsp_ls(distance_matrix) {

//need to check if there are no cities or if there is one city
    if (distance_matrix.length === 0) {
        return 0;
    }

    if (distance_matrix.length === 1) {
        return 0;
    }

// we need to generate a random starting route
    const n = distance_matrix.length;
    function randomStart(n) {
        let route = Array.from(Array(n).keys());
        for (let i = n -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [route[i], route[j]] = [route[j], route[i]];
        }
        return route;
    }
//we need to figure out the total calculation for the route
    function calculateRoute(route) {
        let distance = 0;
        for (let i = 0; i < route.length -1; i++) {
            distance += distance_matrix[route[i]][route[i + 1]];
        }
        return distance;
    }
//this is a requirement
//need to maintain and swap    
// ```javascript
// 2optSwap(route, i, k)
//   cities 1 to i-1 stay in the order they are
//   cities i to k are reversed
//   cities k + 1 to n stay in the order they are
// ``
    function twoOptSwap(route, i, k) {
        let newRoute = route.slice(0, i);
        let swapped = route.slice(i, k + 1).reverse();
        return newRoute.concat(swapped, route.slice(k + 1));
    }

    //main functionality 
    let route = randomStart(n); // Start with a random route
    //initilizing the stopping criteria: if false keep looking, if true yay end running
    let improved = true;

    while (improved) {
        improved = false;
        //requirement
        for (let i = 0; i < n - 1; i++) {
            for (let k = i + 1; k < n; k++) {
                let newRoute = twoOptSwap(route, i, k); // Try a 2-opt swap
                if (calculateRoute(newRoute) < calculateRoute(route)) {
                    route = newRoute; // Keep the new route if it's better
                    improved = true;
                    console.log('route length:', route);
                }
            }
        }
    }
    // Return the shortest distance found
    return calculateRoute(route);
}

    /*  
        For the stopping criteria I made it so that if there was no improvemnt from the 2-opt swap
        then it will not continue to run. I chose this way because it made the most sense to me. 
        If there is no better route to check then there should be nothing else to run so we stop the program. 
        I know that I could've set a fixed number of iterations because it was one method
        that we had talked about in class, but for me this made the most sense implementation wise. 
        For deciding i and k, I chose to iterate over all pairs where specifically i < k. This was because 
        I wanted to make sure that each possible swap was considered during each iteration.
        For my implementation, I make sure that all combinations are considered and am avoiding possible redundancy. 
        Since the condition that i < k makes sure that no pair is tested more than once because, as an exmaple,
        if we have i = 0 and k = 2 being tested, then we do not need to test i = 2 and k = 0 because they
        would end up producing the same result. This acknowledges the second piece of the requirement in the ReadMe
        making sure that by creating this environment it is not possible to reverse it again, essentially undoing
        what we have just done.

    */