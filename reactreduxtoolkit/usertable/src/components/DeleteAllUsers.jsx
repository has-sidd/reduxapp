import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteUsers } from '../store/actions';

const DeleteAllUsers = () => {
	const dispatch = useDispatch();

	const handleClear = () => {
		dispatch(deleteUsers());
	};

	return (
		<Wrapper>
			<button className="btn clear-btn" onClick={() => handleClear()}>
				clear users
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.clear-btn {
		text-transform: capitalize;
		background-color: #db338a;
		margin-top: 2rem;
	}
`;

export default DeleteAllUsers;
