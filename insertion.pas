algorithm insertion
var
  arr: array of INTEGER;
  i, j, elt: INTEGER;

begin
  

  for i := 1 to length(arr) - 1 do
  
   elt:= arr[i];
    j := i - 1;
  end_for 
  while (j >= 0) and (elt< arr[j]) do
    
      arr[j + 1] := arr[j];  
      j := j - 1;
  end_while 
    arr[j + 1] := elt; 
end 