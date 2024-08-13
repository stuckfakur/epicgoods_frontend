// @flow
import * as React from 'react';

type Props = {};
export default function _HeaderButtonDefault(props: Props) {
    return (
        <>
            <div>
                <a href="/auth/login">
                    <button className="login">Masuk</button>
                </a>
            </div>
            <div>
                <a href="/auth/register">
                    <button className="register">Daftar</button>
                </a>
            </div>
        </>
    );
};