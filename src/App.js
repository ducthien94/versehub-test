import "./App.css";
import HorizontalSlideShow from "./components/HorizontalSlideShow";

function App() {
  const slides = [
    {
      index: 1,
      imgSrc:
        "https://images.unsplash.com/photo-1598368627628-3ec875cac0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      content: "Lorem ipssum dolor sit amet 1",
    },
    {
      index: 2,
      imgSrc:
        "https://images.unsplash.com/photo-1599311979600-a629977414ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      content: "Lorem ipssum dolor sit amet 2",
    },
    {
      index: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1598359927618-fded3c1dc225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      content: "Lorem ipssum dolor sit amet 3",
    },
    {
      index: 4,
      imgSrc:
        "https://images.unsplash.com/photo-1599313367613-be866af740de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      content: "Lorem ipssum dolor sit amet 4",
    },
    {
      index: 5,
      imgSrc:
        "https://images.unsplash.com/photo-1598366726453-4cd21502b7cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      content: "Lorem ipssum dolor sit amet 5",
    },
  ];
  return <HorizontalSlideShow slides={slides} />;
}

export default App;
