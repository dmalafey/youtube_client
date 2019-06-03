import API_KEY from './key'
import search from "youtube-search";

const getCatsVideo = () => {
    var opts = {
        maxResults: 20,
        key: API_KEY
    };

    search('cat', opts, function(err, results) {
        if(err) return console.log(err);

        console.dir(results);
    });
}

export default getCatsVideo;