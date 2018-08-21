define(['dojo/has'], function(has) {
	if (has('foo')) {
		return {
			foo() {
				return true;
			}
		};
	} else {
		return {
			foo() {
				return false;
			}
		};
	}
});
