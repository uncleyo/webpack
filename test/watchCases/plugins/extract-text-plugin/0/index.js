import "./style.css"

it("should ignore change to file and directory", function() {
	switch(WATCH_STEP) {
		case "0":
			STATE.first = STATS_JSON.hash;
			break;
		case "1":
			STATS_JSON.hash.should.not.be.eql(STATE.first, "stats hash should have changed, but didn't");
			break;
	}
});
