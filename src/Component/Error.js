import React from 'react';
import { Link } from 'react-router-dom';
export default function error() {

    return (
        <>
            <section class=" error-container">
                <span class="four"><span class="screen-reader-text">4</span></span>
                <span class="zero"><span class="screen-reader-text">0</span></span>
                <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
            <div class="link-container">
                <Link to="/" class="more-link rounded-3">VISIT THE HOME</Link >
            </div>
        </>
    );






}