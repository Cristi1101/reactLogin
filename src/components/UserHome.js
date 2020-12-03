import React from 'react'
import { useHistory } from "react-router-dom";
import { useFetch } from '../useFetch-images';

const url = 'https://jsonplaceholder.typicode.com/photos';

const UserHome = () => {
    const {images} = useFetch(url);

    const history = useHistory();

    const logOut = () => {
        localStorage.clear();
        history.push("/");
    }

    console.log(images);
    console.log(localStorage.getItem('userRole'));
    return (
        <div className="home">
            {(localStorage.getItem('userRole') === "admin") ? 
            (
                <div>
                    <div className="welcome-message">
                        <p> You logged in with an admin account! </p>
                        <button className="btn" onClick={logOut}>Logout</button>
                    </div>
                    {images.map((image) => {
                        return(
                            <div className="album">
                                <img src={image.url} alt="image"/>
                                <figcaption> 
                                    AlbumId: {image.albumId} <br/>
                                    ImageId: {image.id} <br/>
                                    Title: {image.title} 
                                </figcaption>
                            </div>
                        );
                    })}
                </div>
            ) : 
            (
                <div>
                    <div className="welcome-message">
                        <p> Welcome! </p>
                        <button className="btn" onClick={logOut}>Logout</button>
                    </div>
                    {images.map((image) => {
                        return(
                            <div className="album">
                                <img src={image.url} alt="image"/>
                                <figcaption> 
                                    Title: {image.title} 
                                </figcaption>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    )
}

export default UserHome;
