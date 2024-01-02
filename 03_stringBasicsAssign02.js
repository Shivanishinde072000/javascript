function stringHandsOn() {
  var givenString = "   Hey you are doing good, Keep it up      ";
  console.log(`Given string is:${givenString}`);

  console.log(`Total number of Character: ${givenString.length}`);

  var result = givenString.trim();
  console.log(
    `string after removing spaces:${result}, It's length is:${result.length}`
  );

  console.log(`Check string starts with up:${result.startsWith("up")}`);

  console.log(`Check string starts with Hey:${result.startsWith("Hey")}`);

  console.log(
    `First Character:${result.charAt(0)}, Last Character:${result.charAt(
      result.length - 1
    )}`
  );

  var totalWord = result.split(" ");
  console.log(`Total words after triming: ${totalWord.length}`);

  var removedSpaces = givenString.length - result.length;
  console.log(`Total number removed spaces:${removedSpaces} `);

  var indexOfgood = givenString.indexOf("good");
  console.log(`Index of "good":${indexOfgood}`);

  var substring = result.slice(22, 45);
  console.log(`Substring is: ${substring}`);
}

stringHandsOn();
