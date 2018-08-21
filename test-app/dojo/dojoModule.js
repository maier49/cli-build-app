define(['dojo/has'], function() {
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
