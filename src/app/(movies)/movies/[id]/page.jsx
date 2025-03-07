import MovieInfo from "@/components/movie-info"
import MovieVideos from "@/components/movie-videos"
import { Suspense } from "react"

export default async function moiveDetail({ params :{id},}) {
    return<div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie info</h1>}>
           <MovieVideos id={id} />            
        </Suspense>
    </div>
}