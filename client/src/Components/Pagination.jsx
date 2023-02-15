import { Button } from "react-bootstrap";

const Pagination = ({
  chunkedNotes,
  setChunkedNotes,
  currentPage,
  setCurrentPage,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        margin: "1rem 0",
      }}
    >
      <Button
        variant="primary"
        size="md"
        onClick={handlePrevPage}
        disabled={currentPage === 0}
      >
        &lt;
      </Button>
      <p style={{ margin: 0 }}>Page {+currentPage + 1}</p>
      <Button
        variant="primary"
        size="md"
        onClick={handleNextPage}
        disabled={currentPage === chunkedNotes.length - 1}
      >
        &gt;
      </Button>
    </div>
  );
};

export default Pagination;
