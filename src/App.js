import { useEffect, useState } from "react";
import ImageCard from "./components/imageCard";
import ImageSearch from "./components/imageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [safe, setSafe] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&safesearch=${safe}&page=${page}&per_page=18`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [term, safe, page]);
  return (
    <div className="container mx-auto mt-2 mb-16">
      <ImageSearch
        searchText={(text, safe, page) => {
          setTerm(text);
          setSafe(safe);
          setPage(page);
        }}
      />
      {isLoading ? (
        <h1 className="text-6xl mx-auto text-center mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 gap-4 p-8 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
