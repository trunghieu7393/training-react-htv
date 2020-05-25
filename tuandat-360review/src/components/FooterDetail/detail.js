import React from 'react';

const detail = () => {
    const custom = {
        position: "absolute",
        width: "-webkit-fill-available",
    }

    return (
        <footer class="footer" style={custom}>
            <div class="container-fluid">
                <div class="row">
                    <nav class="footer-nav">
                        <ul>
                            <li><a href="#" target="_blank">About Us</a></li>
                            <li><a href="#" target="_blank">Contact</a></li>
                            <li><a href="#" target="_blank">Licenses</a></li>
                        </ul>
                    </nav>
                    <div class="credits ml-auto">
                        <span class="copyright">
                            © 2020 Hybrid Technologies Vietnam
                          <i class="fa fa-heart heart"></i>
                            All Rights Reserved
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default detail;