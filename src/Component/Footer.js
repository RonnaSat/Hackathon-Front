import React from 'react';

export default function Footer() {
    return (
        <>
            <div class="footer-basic">
                <footer>
                    <div class="social">
                        <a href="#"><i class="iconn bi bi-instagram"></i></a>
                        <a href="#"><i class="iconn bi bi-facebook"></i></a>
                        <a href="#"><i class="iconn bi bi-twitter"></i></a>
                        <a href="#"><i class="iconn bi bi-google"></i></a>
                    </div>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#">Home</a></li>
                        <li class="list-inline-item"><a href="#">Product</a></li>
                        <li class="list-inline-item"><a href="#">Order</a></li>
                        <li class="list-inline-item"><a href="#">Review</a></li>
                    </ul>
                    <p class="copyright">Beauty Free © 2022</p>
                </footer>
            </div>
        </>

    );
}
