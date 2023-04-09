import { createSlice } from '@reduxjs/toolkit';

export interface Wikis {
    key: number,
    title: string,
    avatar: string,
    content: string
}

export interface WikiState {
    wikiColumns: Wikis[];
}

const defaultState: WikiState = {
    wikiColumns: Array.from({ length: 20 }).map((_, i) => ({
        key: i+1,
        title: `리액트를 잘하는 방법 Ver.${i+1}`,
        avatar: `https://joesch.moe/api/v1/random?key=${i+1}`,
        content:
          `${i+1}번째 리액트 잘하는 방법에 대해 소개해드리겠습니다 !
            \n리액트를 잘하는 방법으로는 전역 상태 관리를 잘 다루고 UI UX적인 관점에서 컴포넌트를 다루는 것이 중요합니다.
            \nuseState와 useEffect를 활용하여 적절한 시기에 렌더링을 하고 최적화하는 것 또한 중요합니다.
          `,
      })).reverse(),
};

export const addWiki = (title: string, avatar: string, content: string) => {
    return {
        type: 'wiki/ADD_WIKI',
        payload: { title, avatar, content },
    };
};

export const updateWiki = (key: number, title: string, avatar: string, content: string) => {
    return {
      type: 'wiki/UPDATE_WIKI',
      payload: { key, title, avatar, content },
    };
};

const wikiSlice = createSlice({
    name: 'wiki',
    initialState: defaultState,
    reducers: {
        ADD_WIKI: (state, action) => {
            const { title, avatar, content } = action.payload;
            const newWiki = {
                key: state.wikiColumns.length + 1,
                title,
                avatar,
                content,
            };
            state.wikiColumns.unshift(newWiki);
        },
        UPDATE_WIKI: (state, action) => {
            const { key, title, avatar, content } = action.payload;
            const index = state.wikiColumns.findIndex((wiki) => wiki.key === key);
            if (index !== -1) {
              state.wikiColumns[index] = {
                key,
                title,
                avatar,
                content,
              };
            }
        },
    },
    extraReducers: () => {},
});

export default wikiSlice.reducer;