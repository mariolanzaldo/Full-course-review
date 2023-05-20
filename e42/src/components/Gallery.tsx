import { FunctionComponent, useEffect, useState } from "react";
import { useGetGalleryQuery, usePrefetch } from "../redux/slices/apiSlice";
import { Box, Pagination } from "@mui/material";
import GalleryImages from "./GalleryImages";

interface Props {
    id: string;
    count: number;
};

const Gallery: FunctionComponent<Props> = ({ id, count }) => {
    const [page, setPage] = useState(1);

    const prefetchNext = usePrefetch("getGallery");
    
    useEffect(() => {

        const handleScroll = () => {
            if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
                prefetchNext({ galleryId: id, page: page + 1, count }, { force: true});
            }
        };

        window.addEventListener('scroll', handleScroll);

          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
    }, []);

    const { data, isError, isLoading } = useGetGalleryQuery({
        galleryId: id,
        page: page,
        count,
    });

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        event.preventDefault();
        setPage(value);
        
    };

    if(isLoading) return (<div>Loading...</div>);
    if(isError) return (<div>{"Something went wrong ):"}</div>);


    return (
        <Box>
            <GalleryImages images={data.images}/>
            <Pagination 
            variant="outlined"
            color="secondary"
            count={count}
            page={page}
            size="large"
            onChange={handleChange}
            sx={{
                display: "flex",
                width: "100%",
                justifyContent:"center"
            }}
            />
        </Box>
    );
}; 

export default Gallery;