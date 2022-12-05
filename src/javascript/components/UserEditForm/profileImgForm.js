import Component from '../../core/Component.js';
import {
    auth,
    db,
    doc,
    getDoc,
    getDownloadURL,
    getStorage,
    ref,
    storage,
    updateDoc,
    updateProfile,
    uploadBytes,
    deleteObject,
} from '../../firebase.js';

class ProfileImgForm extends Component {
    constructor(props) {
        super(props);
        this.token = localStorage.getItem('token');
    }
    async getUserImg() {
        const docRef = doc(db, 'users', auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        this.photoURL = docSnap.data().photoURL;

        return;
    }
    // 프로필 이미지 변경 함수
    async changeProfileImg(e) {
        // console.log(e.target.files[0]);
        const userStorageRef = ref(
            storage,
            `user_images/${auth.currentUser.uid}`
            // `user_images/${this.token}`
        );

        // 예외 처리
        try {
            uploadBytes(userStorageRef, e.target.files[0]).then((snapshot) => {
                getDownloadURL(userStorageRef).then(async (downloadURL) => {
                    // 얻은거 storage 저장
                    // downloadURL을 얻었다
                    // auth 정보 변경
                    // database 정보 변경
                    updateProfile(auth.currentUser, {
                        photoURL: downloadURL,
                    });
                    const userProfile = doc(db, 'users', auth.currentUser.uid);
                    await updateDoc(userProfile, {
                        photoURL: downloadURL,
                    });
                    const image = document.querySelector('.edit_img');
                    image.src = downloadURL;
                });
            });
            alert('프로필 이미지가 변경되었습니다.');
        } catch (error) {
            console.log(error);
        }

        // 프로필 이미지 변경 로직

        // userStrorageRef : Storage에 프로필 이미지를 저장하는 폴더를 만들고,
        // 그 안에 유저의 고유번호에 맞게 이미지가 들어가도록 경로를 설정한다
        // uploadBytes : 이미지를 Storage에 저장한다
        // getDownloadURL : 이미지의 URL을 얻는다
        // updateProfile : auth에서 유저 이미지 변경
        // updateDoc : firestore database에서 유저 이미지 변경
    }
    async deleteImg() {
        const docRef = doc(db, 'users', auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        const storage = getStorage();

        // auth에서 프로필 이미지 삭제
        updateProfile(auth.currentUser, {
            photoURL: null,
        });

        // firestore에서 프로필 이미지 삭제
        await updateDoc(docRef, {
            photoURL: null,
        });

        // storage에서 프로필 이미지 삭제
        const userImgRef = ref(storage, `user_images/${auth.currentUser.uid}`);

        deleteObject(userImgRef).then(() => {
            const image = document.querySelector('.edit_img');
            image.src = '/src/assets/profile/profile.png';
            alert('프로필 이미지가 삭제되었습니다.');
        });
    }
    render() {
        // 프로필 이미지 폼
        const imgForm = document.createElement('form');
        imgForm.setAttribute('class', 'edit_form_img');

        const profileImgTit = document.createElement('label');
        profileImgTit.setAttribute('class', 'edit_lab_img');
        profileImgTit.textContent = '프로필 사진';

        const profileImg = document.createElement('img');
        profileImg.setAttribute('alt', '유저 프로필 이미지');
        profileImg.setAttribute('class', 'edit_img');

        this.getUserImg().then(() => {
            if (this.photoURL) {
                profileImg.setAttribute('src', this.photoURL);
            } else {
                profileImg.setAttribute(
                    'src',
                    '/src/assets/profile/profile.png'
                );
            }
        });

        const changeBtn = document.createElement('button');
        changeBtn.setAttribute('class', 'edit_btn_change');
        changeBtn.textContent = '이미지 변경';

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'edit_btn_delete');
        deleteBtn.textContent = '이미지 삭제';

        const fileinp = document.createElement('input');
        fileinp.setAttribute('class', 'ir');
        fileinp.setAttribute('type', 'file');

        // 버튼으로 파일 선택 가능
        changeBtn.addEventListener('click', () => {
            event.preventDefault();
            fileinp.click();
        });

        // 기본 이미지로 변경하기
        deleteBtn.addEventListener('click', () => {
            event.preventDefault();
            this.deleteImg();
        });

        fileinp.addEventListener('change', this.changeProfileImg);

        imgForm.appendChild(profileImgTit);
        imgForm.appendChild(profileImg);
        imgForm.appendChild(changeBtn);
        imgForm.appendChild(deleteBtn);
        imgForm.appendChild(fileinp);

        return imgForm;
    }
}

export default ProfileImgForm;
