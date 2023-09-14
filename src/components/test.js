<div className="product-display">
<div className="topflex">
    {selectedSize === 'All' &&
        shuffleArray(productTiles.flat()).map((x) => (
            <div key={x.id} className='productcover1'>
                <img
                    style={{ borderRadius: 10, cursor: "pointer" }}
                    className='product-image'
                    height={'80%'}
                    width={'100%'}
                    src={x.photo}
                    alt='Product Image'
                />
            </div>
        ))
    }


    {selectedSize === 'Basins' && (
        <>
            {showLoader && (
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
            )}

            {productTiles[0].map((tile) => (
                <div key={tile.id} className='productcover1'>
                    <img
                        style={{ borderRadius: 10 }}
                        className='product-image'
                        height={'80%'}
                        width={'100%'}
                        src={tile.photo}
                        alt='Product Image'
                    />
                </div>
            ))}
        </>
    )}
    {selectedSize === 'WCs' && (
        <>
            {showLoader && (
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
            )}

            {showLoader ? (
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
            ) : (
                productTiles[1].map((tile) => (
                    <div key={tile.id} className='productcover1'>
                        <img
                            style={{ borderRadius: 10 }}
                            className='product-image'
                            height={'80%'}
                            width={'100%'}
                            src={tile.photo}
                            alt='Product Image'
                        />
                    </div>
                ))
            )}
        </>
    )}



    {selectedSize === 'Accessories' && (
        <>
            {showLoader && (
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
            )}

            {showLoader ? (
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
            ) : (
                productTiles[2].map((tile) => (
                    <div key={tile.id} className='productcover1'>
                        <div className='image-wrapper'>
                            <img
                                className='product-image'
                                src={tile.photo}
                                alt='Product Image'
                            />
                        </div>
                    </div>
                ))
            )}
        </>
    )}

    {selectedSize === 'Concealed Tanks' && (
        <>
            {showLoader && (
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
            )}

            {showLoader ? (
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
            ) : (
                productTiles[3].map((tile) => (
                    <div key={tile.id} className='productcover1'>
                        <img
                            style={{ borderRadius: 10 }}
                            className='product-image'
                            height={'80%'}
                            width={'100%'}
                            src={tile.photo}
                            alt='Product Image'
                        />
                    </div>
                ))
            )}
        </>
    )}


    {selectedSize === 'Kitchen Sinks' && (
        <>
            {showLoader && (
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
            )}

            {showLoader ? (
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
            ) : (
                productTiles[4].map((tile) => (
                    <div key={tile.id} className='productcover1'>
                        <img
                            style={{ borderRadius: 10 }}
                            className='product-image'
                            height={'80%'}
                            width={'100%'}
                            src={tile.photo}
                            alt='Product Image'
                        />
                    </div>
                ))
            )}
        </>
    )}

    {selectedSize === 'Tiles' && (
        <>
            {showLoader && (
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
            )}

            {showLoader ? (
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
            ) : (
                productTiles[5].map((tile) => (
                    <div key={tile.id} className='productcover1'>
                        <img
                            style={{ borderRadius: 10 }}
                            className='product-image'
                            height={'80%'}
                            width={'100%'}
                            src={tile.photo}
                            alt='Product Image'
                        />
                    </div>
                ))
            )}
        </>
    )}


</div>







</div>
