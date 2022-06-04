function doSomething<T>(arg: T): T {
  return arg;
}

doSomething<number>(52);
doSomething<string>("haha");

interface bookNew<T> {
  id: number;
  name: string;
  data: T;
}

const aBook: bookNew<string> = {
  id: 1,
  name: "haha",
  data: "More and more",
};

const EBook: bookNew<string[]> = {
  id: 2,
  name: "Tittle 2",
  data: ["Review1", "Review2"],
};
