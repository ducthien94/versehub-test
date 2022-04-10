import "./App.css";
import HorizontalSlideShow from "./components/HorizontalSlideShow";

function App() {
  const slides = [
    {
      index: 0,
      imgSrc:
        "https://images.unsplash.com/photo-1572855288678-7f1571bef01e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      content: "Lorem ipssum dolor sit amet 1",
    },
    {
      index: 1,
      imgSrc:
        "https://images.unsplash.com/photo-1648515391046-078cc3b4be92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw4NTE0MjgwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      content: "Lorem ipssum dolor sit amet 2",
    },
    {
      index: 2,
      imgSrc:
        "https://images.unsplash.com/photo-1604233887617-e2f7aff9054c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      content: "Lorem ipssum dolor sit amet 3",
    },
    {
      index: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1604700944558-66a595ce5c85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      content: "Lorem ipssum dolor sit amet 4",
    },
    {
      index: 4,
      imgSrc:
        "https://images.unsplash.com/photo-1646602722713-44c628ac1936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      content: "Lorem ipssum dolor sit amet 4",
    },
    {
      index: 5,
      imgSrc:
        "https://images.unsplash.com/photo-1647815226540-8dbac34fcef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw4NTE0MjgwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      content: "Lorem ipssum dolor sit amet 5",
    },
    // {
    //   index: 6,
    //   imgSrc:
    //     "https://images.unsplash.com/photo-1604700944558-66a595ce5c85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    //   content: "Lorem ipssum dolor sit amet 4",
    // },
    // {
    //   index: 7,
    //   imgSrc:
    //     "https://images.unsplash.com/photo-1646602722713-44c628ac1936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //   content: "Lorem ipssum dolor sit amet 4",
    // },
    // {
    //   index: 8,
    //   imgSrc:
    //     "https://images.unsplash.com/photo-1647815226540-8dbac34fcef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw4NTE0MjgwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //   content: "Lorem ipssum dolor sit amet 5",
    // },
  ];
  return <HorizontalSlideShow data={slides} />;
}

export default App;
