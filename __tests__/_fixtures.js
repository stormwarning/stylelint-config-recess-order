export const incorrectOrder = `
	div {
		background-color: slategray;
		box-sizing: border-box;
		flex: 1 1 auto;
		font-size: 1.5rem;
		gap: 16px;
		order: 1;
		pointer-events: all;
		position: relative;
		transition: opacity 300ms ease;
		width: 320px;
	}`;

export const correctOrder = `
	div {
		box-sizing: border-box;
		flex: 1 1 auto;
		gap: 16px;
		order: 1;
		width: 320px;
		background-color: slategray;
		font-size: 1.5rem;
		pointer-events: all;
		position: relative;
		transition: opacity 300ms ease;
	}`;
