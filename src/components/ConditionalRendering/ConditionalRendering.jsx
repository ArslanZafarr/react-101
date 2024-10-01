
import { Toggle } from "rsuite"
import "./ConditionalRendering.css"
import { useState } from "react";

const ConditionalRendering = () => {

    const [isGridView, setIsGridView] = useState(true);

    const handleToggleChange = (value) => {
        setIsGridView(value);
    };


    return (
        <>
            <section>

                <div
                    className="container"
                >

                    <div
                        className="conditional-rendering-heading"
                    >
                        <h1>Conditional Rendering</h1>



                    </div>


                    <div className="toggle-content">
                        <h4>{isGridView ? "Grid View" : "List View"}</h4>
                        <Toggle size="lg" checked={isGridView} onChange={handleToggleChange}>
                            Toggle
                        </Toggle>
                    </div>

                    {isGridView ? (
                        <div className="boxes-grid">
                            <div className="box">1</div>
                            <div className="box">2</div>
                            <div className="box">3</div>
                            <div className="box">4</div>
                            <div className="box">5</div>
                            <div className="box">6</div>
                            <div className="box">7</div>
                            <div className="box">8</div>
                        </div>
                    ) : (
                        <div className="boxes-list">
                            <div className="box">1</div>
                            <div className="box">2</div>
                            <div className="box">3</div>
                            <div className="box">4</div>
                            <div className="box">5</div>
                            <div className="box">6</div>
                            <div className="box">7</div>
                            <div className="box">8</div>
                        </div>
                    )}




                </div>

            </section>
        </>
    )
}

export default ConditionalRendering



