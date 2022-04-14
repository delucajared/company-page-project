url = 'https://api.lever.co/v0/postings/appcues-2?mode=json'

//Setting up the structure for each job posting
function createJobs(_data) {

    //Checking for potential Lever source or origin parameters
    let pageUrl = window.location.href;
    let leverParameter = '';
    let trackingPrefix = '?lever-'

    if (pageUrl.indexOf(trackingPrefix) >= 0) {
        // Found Lever parameter
        let pageUrlSplit = pageUrl.split(trackingPrefix);
        leverParameter = '?lever-' + pageUrlSplit[1];
    }

    for (i = 0; i < _data.length; i++) {
        let posting = _data[i]
        let title = posting.text.replace('- Remote', '').replace('| Remote', '')
        let team = posting.categories.team
        let link = posting.hostedUrl + leverParameter
        if (team === 'Marketing') {
            let category = document.createElement('p');
            category.className = 'job-team';
            category.setAttribute('id', 'job-team-header');
            category.innerHTML = team;
            document.querySelector('.jobs-list-marketing').append(category);
            $('#jobs-container .jobs-list-marketing').append(
                '<div class="job-listing">' +
                '<p class="job-title">' + title + '</p>' +
                '<a target="_blank" class="btn-lever-link" href="' + link + '"><button class="btn-lever">Get details</button></a>' +
                '</div>'

            );
        } if (team === 'Sales') {
            let category = document.createElement('p');
            category.className = 'job-team';
            category.setAttribute('id', 'job-team-header');
            category.innerHTML = team;
            document.querySelector('.jobs-list-sales').append(category);
            $('#jobs-container .jobs-list-sales').append(
                '<div class="job-listing">' +
                '<p class="job-title">' + title + '</p>' +
                '<a target="_blank" class="btn-lever-link" href="' + link + '"><button class="btn-lever">Get details</button></a>' +
                '</div>'

            );
        } if (team === 'Customer Experience') {
            let category = document.createElement('p');
            category.className = 'job-team';
            category.setAttribute('id', 'job-team-header');
            category.innerHTML = team;
            document.querySelector('.jobs-list-cx').append(category);
            $('#jobs-container .jobs-list-cx').append(
                '<div class="job-listing">' +
                '<p class="job-title">' + title + '</p>' +
                '<a target="_blank" class="btn-lever-link" href="' + link + '"><button class="btn-lever">Get details</button></a>' +
                '</div>'

            );
        } if (team === 'Engineering') {
            let category = document.createElement('p');
            category.className = 'job-team';
            category.setAttribute('id', 'job-team-header');
            category.innerHTML = team;
            document.querySelector('.jobs-list-eng').append(category);
            $('#jobs-container .jobs-list-eng').append(
                '<div class="job-listing">' +
                '<p class="job-title">' + title + '</p>' +
                '<a target="_blank" class="btn-lever-link" href="' + link + '"><button class="btn-lever">Get details</button></a>' +
                '</div>'

            );
        } if (team === 'Product') {
            let category = document.createElement('p');
            category.className = 'job-team';
            category.setAttribute('id', 'job-team-header');
            category.innerHTML = team;
            document.querySelector('.jobs-list-product').append(category);
            $('#jobs-container .jobs-list-product').append(
                '<div class="job-listing">' +
                '<p class="job-title">' + title + '</p>' +
                '<a target="_blank" class="btn-lever-link" href="' + link + '"><button class="btn-lever">Get details</button></a>' +
                '</div>'

            );
        } if (team === 'G&A') {
            let category = document.createElement('p');
            category.className = 'job-team';
            category.setAttribute('id', 'job-team-header');
            category.innerHTML = team;
            document.querySelector('.jobs-list-ga').append(category);
            $('#jobs-container .jobs-list-ga').append(
                '<div class="job-listing">' +
                '<p class="job-title">' + title + '</p>' +
                '<a target="_blank" class="btn-lever-link" href="' + link + '"><button class="btn-lever">Get details</button></a>' +
                '</div>'

            );
        }
    }
};

//Fetching job postings from Lever's postings API
$.ajax({
    dataType: "json",
    url: url,
    success: function (data) {
        createJobs(data);
    }
});

// //Show the dropdown menu
// function menuOneShow() {
//     document.getElementById('menu-1').classList.toggle('show');
// };
// //Hide the dropdown menu on click outside
// // $(document).on("click", function (e) {
// //     if ($(e.target).is("#menu-1-button") === false) {
// //         $(".show").toggle();
// //         document.getElementById('menu-1').removeEventListener('click', menuOneShow);
// //     }
// // });

// //Trigger click event for dropdown menu
// window.onload = async function menuShow() {
//     await document.querySelector('#menu-1-button').addEventListener('click', menuOneShow);
// };

// // Hamburger menu for mobile
// document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
// document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);
// function sideMenuAppears() {
//     console.log('sideMenuAppears() is active');
//     document.getElementById('side-menu').classList.add('show-menu');
// }
// function sideMenuDisappears() {
//     // console.log('sideMenuDisappears() is active'); - if you want to test the function, uncomment this
//     document.getElementById('side-menu').classList.remove('show-menu');
// }