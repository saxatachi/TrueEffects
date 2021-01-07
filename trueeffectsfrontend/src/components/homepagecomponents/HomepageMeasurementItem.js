import React from 'react';

const HomepageMeasurementItem = (props) => {
    
    return (
        <>      {props.measurement.length>0 ? <>
                <div className="homepage__measurementcontainer-data">Pomiary na dzień 24.12.2020</div>
                <div className="homepage__measurementcontainer-add"><button>+ Dodaj nowe pomiary</button></div>
                <div className="homepage__measurementcontainer__container">
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Prawy biceps</div>
                        <div className="homepage__measurementcontainer__container__element-result">{props.measurement[0].right_biceps}  cm</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Lewy biceps</div>
                        <div className="homepage__measurementcontainer__container__element-result">{props.measurement[0].left_biceps} cm</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Prawe przedramię</div>
                        <div className="homepage__measurementcontainer__container__element-result">{props.measurement[0].right_forearm} cm</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Lewe przedramię</div>
                        <div className="homepage__measurementcontainer__container__element-result">{props.measurement[0].left_forearm}  cm</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Udo prawej nogi</div>
                        <div className="homepage__measurementcontainer__container__element-result">{props.measurement[0].right_leg} cm</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Udo lewej nogi</div>
                        <div className="homepage__measurementcontainer__container__element-result">{props.measurement[0].right_leg} cm</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Waga</div>
                        <div className="homepage__measurementcontainer__container__element-result">75kg</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Wzrost</div>
                        <div className="homepage__measurementcontainer__container__element-result">180 cm</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Tkanka Tłuszczowa</div>
                        <div className="homepage__measurementcontainer__container__element-result">{props.measurement.bodyfat} %</div>
                
                </div>
                </div> </>: <div className="homepage__measurementcontainer__title">
                    <div className="homepage__measurementcontainer-title">Twoje ostatnie pomiary</div>
                    <div className="homepage__measurementcontainer-add"><button>+ Dodaj nowe pomiary</button></div>
                    <p>Nie masz aktualnie żadnych pomiarów.</p>
                    </div>
                    }
            </>
    );
};

export default HomepageMeasurementItem;