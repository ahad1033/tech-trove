import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className="flex justify-between items-center my-12">
            <h3 className="text-black text-2xl mb-2">{title}</h3>
            <button className="btn btn-active text-black btn-link">view all</button>
        </div>
    );
};

export default SectionTitle;