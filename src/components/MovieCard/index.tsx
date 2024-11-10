import {Button, Card} from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import {ReactNode} from "react";

interface Props {
    movieTitle: string;
    moviePicture: string;
    movieId?: number;
    isComing?: boolean;
    shoInfo?: ReactNode;
}

const MovieCard = (props: Props) => {
    const {movieTitle, moviePicture, isComing, movieId, shoInfo} = props;
    return (
        <Card
            hoverable
            style={{width: "auto", textAlign: "center"}}
            cover={
                <div style={{width: '100%'}}>
                    <img
                        alt={movieTitle}
                        src={moviePicture}
                        style={{width: '100%', height: 220, objectFit: "cover"}}
                    />
                </div>
            }
        >
            <Meta
                title={<span style={{fontSize: '16px', fontWeight: 'bold'}}>{movieTitle}</span>}
                description={
                    isComing ? shoInfo :
                        <Button
                            type="primary"
                            size="large"
                            style={{width: '100%'}}
                        >
                            <Link href={`movie/${movieId}`}>购票</Link>
                        </Button>
                }
            />
        </Card>
    );
}

export default MovieCard;