

// Ariels User Stories:

For the first function, sum:

I want to create a function that will take a list of numbers and add them up together. 
It will then return the final sum to the user. The function will be able to find the sum of any list length, r
egardless of whether there are an even or odd number of, well, numbers in the list.

For the second function, mean:

I want to create a function that will take a list of numbers and return that list's arithmetic mean to the user. 
The function will add up all the numbers in the list to create a final sum and then divide by the total number 
of numbers in the list (e.g. if there are 8 numbers in the list, it will divide by 8). The function will be able 
to find the average of any list length, regardless of whether there are an even or odd number of numbers in the list.

For the third and final function, median:

I want to create a function that will take a list of numbers, sort it by smallest value to largest value, 
and return that list's median, or middle value, to the user. If the list has an odd number of elements in it, the 
function will return whatever number is smack dab in the middle (e.g. for a list with 5 numbers, the function will 
return the 3rd number). If the list has an even number of elements in it, the function will return the arithmetic mean 
of the middle two numbers (e.g. for a list with 6 numbers, the function will return the average of the 3rd and 4th 
numbers).
The function will be able to find the median of any list length, regardless of whether there are an even or odd number 
of numbers in the list. 

//  My Pseudocode:

1. Create a function called sum
   In the sum function, Loop through an array of numbers
					    Add all indices of the array into a final sum
					    Write the sum 

 2. Create a function called mean
    In the mean function, Loop through an array of numbers
				          Add all the indices in the array into a sum
				          Divide the sum
				          Write the divide/sum output

3. Create a function called median that takes a "values" parameter
   In the median function, Sort "values" and define sort order in sort function.
   					       Create variable "half", Collect sorted "values" length
   					       						   Divide length in half.
   					       						   Round this number down
   					       If "values" length contains remainder
   					        Write the value of the half index
                           Else 
                            Write the arithmetic mean of the two middle indexed numbers of values 
  


