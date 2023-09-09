import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users);

	const handleDelete = (id) => {
		dispatch(removeUser(id));
	};

	return (
		<Wrapper>
			{users.map((user, id) => {
				return (
					<li key={id}>
						{user}{' '}
						<button onClick={() => handleDelete(id)} className="btn-delete">
							<MdDeleteForever className="delete-icon" />
						</button>
					</li>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.section`
	li {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		border-bottom: 1px solid #eee;

		&:first-child {
			border-top: 1px solid #eee;
		}
	}

	.btn-delete {
		border: none;
		background: transparent;
	}
`;

export default DisplayUsers;
