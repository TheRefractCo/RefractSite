<script>
    var song = "loading..."
    var songurl = ""
    const url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=shef3r&api_key=2fbb51db5a032af3e6c393d92b2e9380&format=json&limit=1';
        async function getdata() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    console.error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                if (data != null) {
                    song = data["recenttracks"]["track"][0]["name"];
                    songurl = "https://google.com/?q=" + data["recenttracks"]["track"][0]["name"] + " by " + data["recenttracks"]["track"][0]["artist"]["#text"];
                }
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getdata();
</script>
<a id="songcont" href="{songurl}">
    <p>🎧 {song}</p>
    <div id="gradient">
    </div>
</a>
<style>
    #gradient {
        height: 10px;
        background: linear-gradient(to top, black, rgba(0, 0, 0, .4));
        width: 100%;
        position: absolute;
        bottom: 0;
    }
    p {
        font-size: 12px;
        text-overflow: ellipsis;
        text-align: center;
        line-height: 15px;
        line-clamp: 3;
        word-wrap: break-word;
        width: 130px;
        -webkit-line-clamp: 3;
    }
    #songcont {
        position: relative;
        overflow: hidden;
        height: 40px;
        width: 130px;
        overflow: hidden;
    }
</style>