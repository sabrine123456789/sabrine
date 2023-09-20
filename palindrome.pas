algorithm IsPalindrome;
var
  word, reversedWord: string;
  i: integer;
  isPalindrome: boolean;
begin
  
  
  reversedWord := '';
  
  
  for i := (word.length) downto 1 do
    reversedWord := reversedWord + word[i];
  
  
  isPalindrome := word = reversedWord;&
    end_for 
  
  if isPalindrome then
    write('The word is a palindrome.')
  else
    write('The word is not a palindrome.');
	end_if 
end.
