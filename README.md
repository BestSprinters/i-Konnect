# i-Konnect

당신의 아이돌을 커넥팅 해보세요: 추억의 아이돌 조공 후원 서비스

## 프로젝트 소개

<img src="https://github.com/BestSprinters/i-Konnect/assets/36994104/8f8dde62-0aac-42a6-ba3e-ec731934c200" width=700>

- i-konnect는 idol, kpop, connect의 합성어로 당신의 아이돌에게 커넥팅하라는 의미가 담겨 있습니다.
- i-konnect를 통해 추억의 아이돌에게 조공을 후원할 수 있습니다.
- 추억의 아이돌에게 조공을 후원하며 과거의 향수를 느껴보세요.

## 팀원 소개

|                                                                              **김민재**                                                                               |                                                                              **김보미**                                                                              |                                                                                 **김혜선**                                                                                  |                                                                                **장준혁**                                                                                 |                                                                              **이승헌**                                                                               |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://github.com/BestSprinters/i-Konnect/assets/36994104/e1e5f7d5-f340-491d-8c73-6dfb60ac9054" height=150> <br/> @Darkthos](https://github.com/Darkthos) | [<img src="https://github.com/BestSprinters/i-Konnect/assets/36994104/a06d58e5-9f38-418d-b1fa-56da9bfa8b69" height=150 > <br/> @Kbomi16](https://github.com/Kbomi16) | [<img src="https://github.com/BestSprinters/i-Konnect/assets/36994104/8044a4c5-461a-4c57-92c8-9273c20c55b6" height=150> <br/> @kim-hye-sun](https://github.com/kim-hye-sun) | [<img src="https://github.com/BestSprinters/i-Konnect/assets/36994104/e422795d-9e35-4430-af23-cf02c3da3433" height=150> <br/> @CitrusSoda](https://github.com/CitrusSoda) | [<img src="https://github.com/BestSprinters/i-Konnect/assets/36994104/33411e2b-c9f9-4743-b58b-1e9ad2ab6d8c" height=150> <br/> @heony704](https://github.com/heony704) |

## 기술 스택

<img src="https://github.com/BestSprinters/i-Konnect/assets/36994104/fd239b43-84bf-486f-8c89-4f2344937501" width=700>

- 환경: `yarn`, `Vite`, `React`
- 서버통신: `Axios`
- 라우팅: `React Router`
- 스타일: `tailwindcss`, `Swiper`, `Framer-motioin`
- 협업: `eslint`, `prettier`, `husky`
- 배포: `netlify`

## 프로젝트 구조

```
📂.husky
📂public
📂src
┣ 📂apis
┃ ┣ 📂charts
┃ ┃ ┗ 📜getChartApi.js
┃ ┣ 📂donations
┃ ┃ ┣ 📜getDonationsApi.js
┃ ┃ ┣ 📜postDonationsApi.js
┃ ┃ ┗ 📜putDonationsApi.js
┃ ┣ 📂idols
┃ ┃ ┗ 📜getIdolsApi.js
┃ ┣ 📂votes
┃ ┃ ┗ 📜postVotesApi.js
┃ ┗ 📜axiosInstance.js
┣ 📂assets
┃ ┣ 📂fonts
┃ ┗ 📂imgs
┣ 📂components
┃ ┣ 📜Button.jsx
┃ ┣ 📜ChargeCreditModal.jsx
┃ ┣ 📜Chart.jsx
┃ ┣ 📜ChartList.jsx
┃ ┣ 📜ChartRank.jsx
┃ ┣ 📜CheckedIdolAvatar.jsx
┃ ┣ 📜ChoiceGender.jsx
┃ ┣ 📜DonateModal.jsx
┃ ┣ 📜FavoriteIdol.jsx
┃ ┣ 📜Header.jsx
┃ ┣ 📜IdolAvatar.jsx
┃ ┣ 📜IdolThumbnail.jsx
┃ ┣ 📜InnerAnimation.jsx
┃ ┣ 📜LinkButton.jsx
┃ ┣ 📜Modal.jsx
┃ ┣ 📜MyCredit.jsx
┃ ┣ 📜MyPageIdol.jsx
┃ ┣ 📜NoCreditModal.jsx
┃ ┣ 📜ProgressBar.jsx
┃ ┣ 📜SponsorCard.jsx
┃ ┣ 📜SponsorPagination.jsx
┃ ┣ 📜SponsorSlider.jsx
┃ ┣ 📜VoteList.jsx
┃ ┣ 📜VoteModal.jsx
┃ ┣ 📜VoteRank.jsx
┃ ┗ 📜VoteSuccessModal.jsx
┣ 📂constants
┃ ┗ 📜paths.js
┣ 📂contexts
┃ ┗ 📜CreditAmount.js
┣ 📂hooks
┃ ┣ 📜useChartLoader.js
┃ ┣ 📜useIsomorphicLayoutEffect.js
┃ ┣ 📜useMediaQuery.js
┃ ┗ 📜useToggle.js
┣ 📂pages
┃ ┣ 📜AddSponsorPage.jsx
┃ ┣ 📜LandingPage.jsx
┃ ┣ 📜ListPage.jsx
┃ ┣ 📜MyPage.jsx
┃ ┗ 📜NotFound.jsx
┣ 📂utils
┃ ┣ 📜createButtonStyle.js
┃ ┣ 📜createQueryParams.js
┃ ┣ 📜displayTime.js
┃ ┣ 📜formattedNumber.js
┃ ┗ 📜insertLocalStorage.js
┣ 📜App.jsx
┣ 📜index.css
┗ 📜main.jsx
📜.eslintrc.cjs
📜.gitignore
📜.prettierrc
📜index.html
📜package.json
📜postcss.config.js
📜README.md
📜tailwind.config.js
📜vite.config.js
📜yarn.lock
```
