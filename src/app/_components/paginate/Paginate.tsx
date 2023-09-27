import ReactPaginate from "react-paginate"
import DropdownIcon from "../icon/DropdownIcon"
import variables from "@/app/_styles/utils/variables.module.scss"

type props = {
    pageCount: number,
    currentPage: number,
    handlePageClick: (selectedItem: { selected: number }) => void
}

const Paginate = (props:props) => {
    return ( 
        <>
            <p className="text-regular-2" style={{color: variables.colorGrey3}}>
                Showing <span style={{ color: variables.colorText }}>1-5</span> from <span style={{ color: variables.colorText }}>100</span> data
            </p>
            <ReactPaginate
                breakLabel="..."
                previousLabel={ <DropdownIcon/> }
                nextLabel={ <DropdownIcon/> }
                onPageChange={props.handlePageClick}
                pageRangeDisplayed={3}
                pageCount={props.pageCount} 
                marginPagesDisplayed={2}                
                renderOnZeroPageCount={null}
                forcePage={props.currentPage}
            />
        </>
     );
}

export default Paginate;