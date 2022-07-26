// let number = document.getElementById('comment-number').textContent = parseInt('')
// function blue() {
    
// }

// COMMENT HOVER
function hoverComment() {
    document.querySelector('.comment-card').classList = "comment-card2";
    document.getElementById('comment-number').style.color = "#147CCC"
}

function unhoverComment() {
    document.querySelector('.comment-card2').classList = "comment-card";
    document.getElementById('comment-number').style.color = "#8899A6"
}


// function hoverComment2() {
//     document.querySelector('.comment-card').classList = "comment-card2";
//     document.getElementById('comment-number2').style.color = "#147CCC"
// }

// function unhoverComment2() {
//     document.querySelector('.comment-card2').classList = "comment-card";
//     document.getElementById('comment-number').style.color = "#8899A6"
// }




// RETWEET HOVER 
function hoverRetweet() {
    document.querySelector('.retweet-card').classList = "retweet-card2";
    document.getElementById('retweet-number').style.color = "#3A8E25"
}

function unhoverRetweet() {
    document.querySelector('.retweet-card2').classList = "retweet-card";
    document.getElementById('retweet-number').style.color = "#8899A6"
}



// LIKES HOVER
function hoverLikes() {
    document.querySelector('.likes-card').classList = "likes-card2"
    document.getElementById('likes-number').style.color = "rgba(244, 36, 94, 1)"
}

function unhoverLikes() {
    document.querySelector('.likes-card2').classList = "likes-card"
    document.getElementById('likes-number').style.color = "#8899A6"
}



// SHARE HOVER
function hoverShare() {
    document.querySelector('.share-card').classList = "share-card2"
    document.getElementById('share-number').style.color = "#147CCC"
}

function unhoverShare() {
    document.querySelector('.share-card2').classList = "share-card"
    document.getElementById('share-number').style.color = "#8899A6"
}





// FOLLOW BUTTON
function follow() {
    document.querySelector('.follow-button').textContent = 'Following'
}
function unfollow() {
    document.querySelector('.follow-button').textContent = 'Follow'
}

function follow2() {
    document.querySelector('.follow-button2').textContent = 'Following'
}
function unfollow2() {
    document.querySelector('.follow-button2').textContent = 'Follow'
}