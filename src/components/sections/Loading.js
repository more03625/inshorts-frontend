import React from 'react'

const Loading = ({ loading, hasMore, setPage, page }) => {
    if (hasMore !== false) {
        window.onscroll = function () {
            if (window.pageYOffset + window.innerHeight >= (document.documentElement.scrollHeight - 400)) {
                setPage(page + 1);
            }
        }
    }
    return (
        <>
            {
                loading === true ? (
                    <div className="row justify-content-center mb-2">
                        <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} ></div>
                    </div>
                ) : ('')
            }
            {
                hasMore === false ?
                    <div className="row text-center justify-content-center mb-2">
                        <p>You are all caught up 🔥</p>
                    </div>
                    : ''
            }
        </>
    )
}

export default Loading
