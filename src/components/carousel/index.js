import { Carousel } from 'antd';
import React, {Component} from "react";

class ImageSlider extends Component {
    render() {
        return (
            <Carousel autoplay>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
        );
    }
}

export default ImageSlider