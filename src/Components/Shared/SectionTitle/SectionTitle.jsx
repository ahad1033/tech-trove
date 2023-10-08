import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className="section-container justify-betweenmy my-12">
            <h3 className="text-yellow-600 mb-2">{title}</h3>
            <button className="btn btn-active text-black btn-link">view all</button>
        </div>
    );
};

export default SectionTitle;