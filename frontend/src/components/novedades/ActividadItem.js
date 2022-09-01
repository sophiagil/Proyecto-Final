import React from 'react';

const ActividadItem = (props) => {
        const { tittle, description, image} = props;

        return (
            <div className="actividades">
                <h3>{tittle}</h3>
                <p>{description}</p>
                <img src={image} />
                <div dangerouslySetInnerHTML={{ __html:body }} />
                <hr />
            </div>
        );
    }

    export default ActividadItem;