import {useRef} from "react";
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, 
    CardText, Container, Row, Col, Button} from 'reactstrap'
import { Loading } from "./LoadingComponent";
import { baseUrl } from '../shared/baseurl';
import { motion, useInView as Fview } from "framer-motion";
import event from "../image/Home/pexels-narda-yescas-724842-1566837.jpg"
import special from "../image/Home/specials.jpg"
import menu from "../image/Home/menu.jpg"
import deliver from "../image/Home/deliver.jpg"

function RenderCard(/* {item, isLoading, errMess} */) {
/*     if (isLoading) {
        return(
            <Loading />
        )
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        )
    }
    else
        return(
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
            ) */
    return (
        <Row className="d-flex justify-content-center" style={{marginTop: "5vh", marginBottom: "5vh"}}>
                <Col md={4}>
                    <motion.div
                    initial = {{x: -50, opacity: 0}}
                    transition={{duration: 1, type: "tween", ease: "easeIn"}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{ once: true }}>
                        <CardImg src={special}/>
                        <h2 className="text-center pt-3">Hello There</h2>
                        <p className="text-center pt-1">Description</p>
                        <div className="d-flex justify-content-center home-butt">
                            <div className="text-center rounded-0 butt">
                                Demo
                            </div>
                        </div>
                    </motion.div>
                </Col>
                <Col md={4}>
                    <motion.div
                    initial = {{x: 50, opacity: 0}}
                    transition={{duration: 1, type: "tween", ease: "easeIn"}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{ once: true }}>
                        <CardImg src={event}/>
                        <h2 className="text-center pt-3">Hello There</h2>
                        <p className="text-center pt-1">Description</p>
                        <div className="d-flex justify-content-center home-butt">
                            <div className="text-center rounded-0 butt">
                                Demo
                            </div>
                        </div>
                    </motion.div>
                </Col>
        </Row>
    )
}

function Home() {

    const ref = useRef(null)
    const isInview = Fview(ref, { once: true })

    const ref2 = useRef(null)
    const isInview2 = Fview(ref2, { once: true })

    const variants = {
        initial: {
          pathLength: 0,
          pathOffset: 1,
        },
        animate: {
          pathLength: 1,
          pathOffset: 0,
          transition: {
            duration: 2,
            ease: "easeInOut",
          },
        },
      };

    return(
            <Container style={{maxWidth: "100%", overflow: "hidden", backgroundColor: "rgb(255, 225, 0)"}} className="px-0">
                <RenderCard/>
                    <motion.div
                    initial = {{y: 50, opacity: 0}}
                    transition={{duration: 1, type: "tween", ease: "easeIn"}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{ once: true }}>
                        <Row>
                            <Col md={8}>
                                <CardImg src={menu}></CardImg>
                            </Col>
                            <Col md={4} className="d-flex justify-content-center align-items-center">
                                <div>
                                    <motion.svg width="204" height="204" viewBox="-150 0 854 674" fill="none" ref={ref}>
                                        <motion.path d="M117.626 316.375C111.76 316.375 107.006 321.129 107.006 326.995V328.598C107.006 334.464 111.76 339.218 117.626 339.218C123.491 339.218 128.246 334.464 128.246 328.598V326.995C128.246 321.13 123.492 316.375 117.626 316.375Z" 
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="7"
                                        variants={variants}
                                        animate={isInview ? "animate" : "initial"}/>
                                        <motion.path d="M169.205 316.375C163.339 316.375 158.585 321.129 158.585 326.995V328.598C158.585 334.464 163.339 339.218 169.205 339.218C175.071 339.218 179.824 334.464 179.824 328.598V326.995C179.824 321.13 175.071 316.375 169.205 316.375Z"
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="7"
                                        variants={variants}
                                        animate={isInview ? "animate" : "initial"}
                                        />
                                        <motion.path d="M220.782 316.375C214.916 316.375 210.162 321.129 210.162 326.995V328.598C210.162 334.464 214.916 339.218 220.782 339.218C226.648 339.218 231.401 334.464 231.401 328.598V326.995C231.4 321.13 226.647 316.375 220.782 316.375Z" 
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="7"
                                        variants={variants}
                                        animate={isInview ? "animate" : "initial"}/>
                                        <motion.path d="M272.359 316.375C266.493 316.375 261.74 321.129 261.74 326.995V328.598C261.74 334.464 266.493 339.218 272.359 339.218C278.225 339.218 282.979 334.464 282.979 328.598V326.995C282.979 321.13 278.225 316.375 272.359 316.375Z" 
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="7"
                                        variants={variants}
                                        animate={isInview ? "animate" : "initial"}/>
                                        <motion.path d="M143.416 355.657C137.55 355.657 132.796 360.411 132.796 366.277V367.877C132.796 373.743 137.55 378.497 143.416 378.497C149.282 378.497 154.035 373.743 154.035 367.877V366.277C154.034 360.411 149.282 355.657 143.416 355.657Z" 
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="7"
                                        variants={variants}
                                        animate={isInview ? "animate" : "initial"}/>
                                        <motion.path d="M194.992 355.657C189.126 355.657 184.372 360.411 184.372 366.277V367.877C184.372 373.743 189.126 378.497 194.992 378.497C200.858 378.497 205.611 373.743 205.611 367.877V366.277C205.611 360.411 200.858 355.657 194.992 355.657Z" 
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="7"
                                        variants={variants}
                                        animate={isInview ? "animate" : "initial"}/>
                                        <motion.path d="M246.571 355.657C240.705 355.657 235.951 360.411 235.951 366.277V367.877C235.951 373.743 240.705 378.497 246.571 378.497C252.437 378.497 257.19 373.743 257.19 367.877V366.277C257.19 360.411 252.435 355.657 246.571 355.657Z" 
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="7"
                                        variants={variants}
                                        animate={isInview ? "animate" : "initial"}/>
                                        <motion.path d="M671.11 252.95C669.104 250.823 666.311 249.617 663.387 249.617H657.362V92.1559C657.362 86.2899 652.608 81.5364 646.742 81.5364H599.352V45.9812C599.352 40.1152 594.599 35.3616 588.733 35.3616H530.728C524.863 35.3616 520.108 40.1152 520.108 45.9812V81.5364H483.792V45.9812C483.792 40.1152 479.038 35.3616 473.172 35.3616H415.163C409.297 35.3616 404.543 40.1152 404.543 45.9812V81.5364H357.154C351.288 81.5364 346.534 86.2899 346.534 92.1559V249.617H341.846C338.924 249.617 336.129 250.823 334.123 252.95C332.117 255.076 331.075 257.935 331.245 260.855L333.848 305.496C326.005 300.604 317.295 296.2 307.737 292.324C265.122 275.051 218.036 272.472 193.762 272.472C169.373 272.472 121.993 275.021 78.689 292.084C35.255 309.201 8.8516 336.658 2.33269 371.489C2.29452 371.696 2.26161 371.9 2.2366 372.107C1.47176 378.143 -1.68238 409.001 11.416 423.866C16.1472 429.234 22.4357 432.071 29.6063 432.071H341.232L341.816 442.11H14.5201C8.65414 442.11 3.90055 446.864 3.90055 452.73C3.90055 458.596 8.65414 463.349 14.5201 463.349H343.056L343.789 475.938H25.1186C19.2526 475.938 14.499 480.692 14.499 486.558V519.338C5.84358 525.937 0.281714 536.098 0.281714 547.483V547.734C0.281714 553.868 1.89696 559.647 4.73911 564.707C1.8838 566.609 0 569.855 0 573.545V582.384C0 582.676 0.00789852 582.964 0.0210627 583.253C0.00789852 583.545 0 583.833 0 584.125V594.059C0 594.355 0.00789852 594.642 0.0210627 594.932C0.00789852 595.22 0 595.51 0 595.801V607.989C0 625.175 10.6525 638.638 24.2484 638.638H74.6607C80.5267 638.638 85.2803 633.885 85.2803 628.019C85.2803 622.153 80.5267 617.399 74.6607 617.399H24.4986C23.4494 616.763 21.2391 613.442 21.2391 607.989L21.2378 595.874L21.2615 595.339C21.2733 595.071 21.2733 594.803 21.2628 594.537L21.2391 584.196V584.164H178.749L202.89 608.644C203.849 609.615 204.978 610.376 206.207 610.913C206.257 610.934 206.304 610.963 206.354 610.984C206.399 611.003 206.447 611.016 206.492 611.034C207.74 611.536 209.08 611.807 210.451 611.807C213.293 611.807 216.016 610.667 218.012 608.645L242.155 584.165H360.12H363.465L363.461 594.062C363.45 594.268 363.442 594.475 363.437 594.684C363.433 594.852 363.433 595.019 363.437 595.186C363.442 595.39 363.451 595.593 363.465 595.799V607.988C363.465 608.617 363.429 609.21 363.375 609.782C363.351 610.031 363.313 610.267 363.28 610.508C363.24 610.811 363.199 611.112 363.145 611.396C363.092 611.671 363.032 611.933 362.97 612.191C362.916 612.413 362.862 612.63 362.802 612.839C362.726 613.105 362.644 613.363 362.558 613.611C362.501 613.775 362.442 613.933 362.383 614.087C362.28 614.352 362.173 614.608 362.06 614.845C362.019 614.934 361.978 615.015 361.935 615.097C361.452 616.054 360.907 616.791 360.375 617.239C360.337 617.272 360.305 617.311 360.267 617.344C360.249 617.357 360.225 617.382 360.207 617.394H107.228C101.362 617.394 96.6081 622.148 96.6081 628.014C96.6081 633.879 101.362 638.633 107.228 638.633H360.453C364.036 638.633 367.406 637.676 370.44 635.984H642.091C647.716 635.984 652.365 631.598 652.692 625.984L668.391 356.796C668.732 350.94 664.262 345.917 658.407 345.576C652.561 345.241 647.528 349.703 647.187 355.56L632.072 614.748H384.125C384.13 614.712 384.131 614.676 384.139 614.64C384.292 613.737 384.406 612.813 384.496 611.881C384.514 611.698 384.544 611.52 384.559 611.337C384.65 610.238 384.702 609.123 384.702 607.988V595.799C384.702 595.528 384.695 595.256 384.68 594.934C384.695 594.645 384.702 594.355 384.702 594.058V584.124C384.702 583.854 384.695 583.583 384.68 583.258C384.695 582.968 384.702 582.677 384.702 582.384V573.545C384.702 573.199 384.683 572.857 384.65 572.519C384.638 572.407 384.618 572.296 384.605 572.185C384.577 571.962 384.546 571.739 384.504 571.522C384.479 571.392 384.447 571.265 384.417 571.136C384.372 570.939 384.323 570.745 384.267 570.554C384.229 570.423 384.185 570.292 384.142 570.162C384.081 569.979 384.014 569.799 383.943 569.62C383.892 569.492 383.84 569.364 383.785 569.241C383.706 569.064 383.622 568.89 383.533 568.719C383.474 568.602 383.415 568.484 383.35 568.369C383.249 568.188 383.14 568.012 383.028 567.839C382.967 567.743 382.909 567.644 382.844 567.55C382.692 567.329 382.529 567.116 382.362 566.907C382.33 566.867 382.303 566.825 382.27 566.786C385.397 562.01 387.381 556.486 387.866 550.563C387.88 550.4 387.892 550.239 387.904 550.076C387.957 549.302 387.992 548.523 387.992 547.736V547.484C387.992 546.834 387.972 546.19 387.936 545.549C387.924 545.354 387.903 545.159 387.888 544.965C387.855 544.518 387.821 544.072 387.772 543.632C387.747 543.406 387.712 543.182 387.681 542.957C387.628 542.55 387.572 542.146 387.506 541.743C387.467 541.505 387.418 541.269 387.373 541.031C387.301 540.648 387.226 540.266 387.14 539.887C387.085 539.641 387.023 539.396 386.963 539.151C386.872 538.789 386.778 538.429 386.678 538.07C386.606 537.815 386.53 537.561 386.452 537.307C386.349 536.971 386.24 536.637 386.127 536.305C386.035 536.035 385.94 535.767 385.841 535.5C385.729 535.199 385.613 534.901 385.495 534.604C385.378 534.315 385.259 534.024 385.137 533.737C385.026 533.481 384.91 533.231 384.795 532.981C384.646 532.66 384.498 532.339 384.34 532.023C384.247 531.837 384.148 531.654 384.052 531.469C383.859 531.096 383.664 530.724 383.457 530.359C383.432 530.314 383.403 530.269 383.378 530.225C381.671 527.243 379.529 524.51 377.022 522.105C376.987 522.071 376.953 522.036 376.917 522.004C376.537 521.642 376.147 521.286 375.749 520.937C375.681 520.878 375.613 520.819 375.543 520.758C375.324 520.57 375.114 520.376 374.891 520.193V486.556C374.891 486.198 374.873 485.844 374.837 485.494C374.825 485.376 374.802 485.261 374.786 485.141C374.756 484.913 374.727 484.686 374.682 484.462C374.656 484.325 374.615 484.192 374.583 484.055C374.534 483.856 374.49 483.658 374.432 483.463C374.39 483.322 374.336 483.188 374.287 483.049C374.224 482.866 374.161 482.683 374.087 482.506C374.03 482.368 373.963 482.232 373.9 482.096C373.822 481.928 373.745 481.758 373.658 481.593C373.587 481.459 373.508 481.329 373.431 481.199C373.339 481.042 373.247 480.883 373.148 480.731C373.065 480.604 372.974 480.481 372.885 480.357C372.778 480.21 372.674 480.064 372.561 479.924C372.466 479.806 372.364 479.691 372.264 479.574C372.145 479.438 372.025 479.306 371.902 479.175C371.795 479.065 371.684 478.959 371.575 478.855C371.445 478.732 371.313 478.61 371.178 478.495C371.062 478.395 370.941 478.3 370.821 478.205C370.679 478.093 370.535 477.985 370.388 477.881C370.263 477.793 370.136 477.709 370.009 477.626C369.856 477.528 369.702 477.435 369.544 477.344C369.411 477.268 369.277 477.194 369.14 477.123C368.978 477.04 368.813 476.96 368.646 476.885C368.507 476.821 368.366 476.76 368.222 476.702C368.05 476.632 367.873 476.57 367.697 476.509C367.552 476.459 367.41 476.412 367.262 476.369C367.08 476.315 366.894 476.27 366.706 476.225C366.558 476.19 366.411 476.155 366.261 476.126C366.07 476.09 365.874 476.064 365.679 476.037C365.527 476.017 365.377 475.995 365.225 475.982C365.172 475.978 365.121 475.966 365.069 475.963L364.333 463.345H374.869C380.735 463.345 385.488 458.592 385.488 452.726C385.488 446.86 380.735 442.106 374.869 442.106H363.093L362.505 431.996C362.856 431.955 363.204 431.897 363.55 431.821C378.222 428.61 386.922 401.443 382.546 372.499C382.529 372.39 382.512 372.282 382.491 372.175C382.285 371.052 382.059 369.939 381.813 368.829C381.676 368.205 381.517 367.588 381.367 366.968C381.255 366.508 381.151 366.047 381.032 365.593C380.806 364.719 380.558 363.854 380.307 362.991C380.254 362.812 380.208 362.631 380.154 362.454C375.759 347.693 367.718 334.43 356.14 322.891L353.106 270.852H415.164H429.723V291.013C429.723 309.09 444.065 323.796 461.693 323.796H472.721H473.172H530.726H543.54C561.17 323.796 575.512 309.089 575.512 291.013V270.853H588.734H652.129L649.334 318.76C648.993 324.616 653.461 329.639 659.318 329.98C665.141 330.322 670.197 325.852 670.538 319.996L673.988 260.852C674.158 257.937 673.118 255.076 671.11 252.95ZM35.7381 497.176H353.648V511.488H350.358H288.438H132.465H37.9181H35.7381V497.176ZM37.9181 562.491C28.8757 562.491 21.5208 555.871 21.5208 547.732V547.48C21.5208 539.345 28.877 532.724 37.9181 532.724H128.022V532.726L157.375 562.491H37.9181ZM210.449 586.063L157.85 532.726H263.051L210.449 586.063ZM362.529 537.628C362.53 537.629 362.533 537.632 362.534 537.633C362.822 537.922 363.099 538.221 363.362 538.53C363.373 538.542 363.38 538.552 363.391 538.564C364.385 539.734 365.176 541.042 365.746 542.437C365.797 542.562 365.851 542.685 365.897 542.811C365.99 543.056 366.067 543.305 366.145 543.555C366.204 543.749 366.262 543.946 366.313 544.143C366.37 544.36 366.423 544.578 366.467 544.797C366.521 545.058 366.563 545.323 366.602 545.587C366.627 545.761 366.657 545.936 366.675 546.111C366.721 546.563 366.753 547.021 366.753 547.483V547.734C366.753 548.194 366.721 548.647 366.677 549.095C366.664 549.223 366.645 549.35 366.628 549.475C366.583 549.817 366.527 550.157 366.456 550.492C366.433 550.603 366.412 550.713 366.386 550.824C366.175 551.715 365.875 552.576 365.493 553.398C365.463 553.462 365.43 553.527 365.398 553.591C365.223 553.953 365.034 554.31 364.826 554.657C364.793 554.713 364.763 554.769 364.728 554.823C364.249 555.606 363.694 556.345 363.071 557.033C362.993 557.119 362.913 557.201 362.833 557.284C362.616 557.513 362.389 557.735 362.157 557.952C362.021 558.08 361.881 558.209 361.739 558.331C361.576 558.474 361.406 558.607 361.237 558.742C359.837 559.855 358.216 560.772 356.402 561.424C356.361 561.438 356.324 561.462 356.284 561.478C354.443 562.123 352.449 562.491 350.357 562.491H263.526L292.88 532.726H350.358V532.724C351.799 532.724 353.189 532.91 354.521 533.225C354.564 533.237 354.603 533.256 354.647 533.267C357.765 534.03 360.47 535.575 362.529 537.628ZM360.986 373.026C361.198 373.958 361.393 374.895 361.568 375.839C364.318 394.269 360.113 406.725 357.691 410.829H351.25H29.6063C28.5465 410.831 28.0437 410.606 27.3552 409.828C22.3699 404.183 21.9724 385.882 23.269 375.079C34.8022 315.032 122.264 293.71 193.764 293.71C263.071 293.71 347.629 314.56 360.986 373.026ZM404.545 249.564H367.775V102.775H404.545V249.564ZM462.553 89.0966C462.261 90.0668 462.101 91.0909 462.101 92.1559V302.563H461.693C455.776 302.562 450.96 297.384 450.96 291.018V260.238C450.96 254.372 446.207 249.618 440.341 249.618H425.783V92.1559V56.6008H462.553V89.0966ZM520.108 302.563H483.792V102.775H520.108V302.563ZM578.115 92.1559V249.617H564.893C559.027 249.617 554.273 254.37 554.273 260.236V291.017C554.273 297.383 549.459 302.56 543.54 302.56H541.346V92.1559V56.6008H578.115V92.1559ZM636.124 249.564H599.354V102.775H636.124V249.564Z"                                     
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="7"
                                        variants={variants}
                                        animate={isInview ? "animate" : "initial"}/>                               
                                    </motion.svg>
                                    <div className="text-center" style={{fontSize: "24px"}}>Description Goes Here</div>
                                    <div className="d-flex justify-content-center home-butt pt-3">
                                        <div className="text-center rounded-0 butt">
                                            Demo
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </motion.div>
                    <motion.div
                    initial = {{y: 50, opacity: 0}}
                    transition={{duration: 1, type: "tween", ease: "easeIn"}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{ once: true }}>
                        <Row>
                            <Col md={4} className="d-flex justify-content-center align-items-center">
                                <div>
                                    <motion.svg width="204" height="204" viewBox="-150 0 854 674" fill="none" ref={ref2}>
                                        <motion.path d="M33.7 384.288V626.928" 
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="10"
                                        variants={variants}
                                        animate={isInview2 ? "animate" : "initial"}/>
                                        <motion.path d="M33.7 424.728H175.24C196.691 424.728 217.263 433.25 232.431 448.418C247.599 463.585 256.12 484.158 256.12 505.608H357.22C378.669 505.608 399.243 514.13 414.41 529.298C429.578 544.465 438.1 565.038 438.1 586.488H33.7"
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="10"
                                        variants={variants}
                                        animate={isInview2 ? "animate" : "initial"}
                                        />
                                        <motion.path d="M175.24 505.608H256.12" 
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="10"
                                        variants={variants}
                                        animate={isInview2 ? "animate" : "initial"}/>
                                        <motion.path d="M74.14 303.408H640.3" 
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="10"
                                        variants={variants}
                                        animate={isInview2 ? "animate" : "initial"}/>
                                        <motion.path d="M357.22 20.3286V60.7687" 
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="10"
                                        variants={variants}
                                        animate={isInview2 ? "animate" : "initial"}/>
                                        <motion.path d="M599.86 303.408C599.86 239.056 574.297 177.34 528.793 131.836C483.288 86.3324 421.571 60.7686 357.22 60.7686C292.869 60.7686 231.152 86.3324 185.648 131.836C140.144 177.34 114.58 239.056 114.58 303.408" 
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="10"
                                        variants={variants}
                                        animate={isInview2 ? "animate" : "initial"}/>
                                        <motion.path d="M316.78 384.288H509.544C524.534 384.277 539.224 380.104 551.976 372.229C564.731 364.356 575.046 353.092 581.77 339.696L598.822 305.495" 
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="10"
                                        variants={variants}
                                        animate={isInview2 ? "animate" : "initial"}/>                                
                                    </motion.svg>
                                    <div className="text-center" style={{fontSize: "24px"}}>Description Goes Here</div>
                                    <div className="d-flex justify-content-center home-butt pt-3">
                                        <div className="text-center rounded-0 butt">
                                            Demo
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={8}>
                                <CardImg src={deliver}></CardImg>
                            </Col>
                        </Row>
                    </motion.div>
            </Container>
    )
}

export default Home;