import MovieInfo, { getMovie } from "@/components/movie-info"
import MovieVideos from "@/components/movie-videos"
import { Suspense } from "react"

export async function generateMetadata({params}){
    const {id} = params;
    const movie = await getMovie(id)
    return{
        title : movie.title,
    }
}


export default async function moiveDetail({ params }) {
    const {id} = params;
    return<div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie info</h1>}>
           <MovieVideos id={id} />            
        </Suspense>
    </div>
}