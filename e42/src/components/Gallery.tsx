import { FunctionComponent } from "react";
import { useGetGalleryQuery } from "../redux/slices/apiSlice";

interface Props {
    id: string;
    count: number;
};

const Gallery: FunctionComponent<Props> = ({ id, count }) => {
const { data, isError, isLoading, error } = useGetGalleryQuery({
      galleryId: id,
      page: '1',
      count,
    });
    console.log(data);


    return (
        <>
        This will be the gallery!</>
    );
}; 

export default Gallery;