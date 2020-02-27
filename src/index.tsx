import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {Button, DocumentCard, DocumentCardActivity,
    DocumentCardPreview,
    DocumentCardTitle,
    IDocumentCardPreviewProps} from 'office-ui-fabric-react';
import '../src/dogs.css';

class AppState {
    @observable timer = 0;
    @observable dogPhoto;
    @observable dogPhoto2;
    @observable dogPhoto3;
    @observable dogPhoto4;
    @observable dogPhoto5;
    @observable dogPhoto6;
    @observable dogPhotoBreed;
    @observable dogPhoto2Breed;
    @observable dogPhoto3Breed;
    @observable dogPhoto4Breed;
    @observable dogPhoto5Breed;
    @observable dogPhoto6Breed;
    @observable dog1Activity;
    @observable dog2Activity;
    @observable dog3Activity;
    @observable dog4Activity;
    @observable dog5Activity;
    @observable dog6Activity;

    constructor() {
        setInterval(() => {
            this.resetTimer()
        }, 5000);
    }

    async resetTimer() {
        this.timer += 6;
        const img = await fetch("https://dog.ceo/api/breeds/image/random");
        const img2 = await fetch("https://dog.ceo/api/breeds/image/random");
        const img3 = await fetch("https://dog.ceo/api/breeds/image/random");
        const img4 = await fetch("https://dog.ceo/api/breeds/image/random");
        const img5 = await fetch("https://dog.ceo/api/breeds/image/random");
        const img6 = await fetch("https://dog.ceo/api/breeds/image/random");
        //console.log(img.json());
        const dogPhoto = await img.json();
        const dogPhoto2 = await img2.json();
        const dogPhoto3 = await img3.json();
        const dogPhoto4 = await img4.json();
        const dogPhoto5 = await img5.json();
        const dogPhoto6 = await img6.json();
        this.dogPhoto = dogPhoto.message;
        this.dogPhoto2 = dogPhoto2.message;
        this.dogPhoto3 = dogPhoto3.message;
        this.dogPhoto4 = dogPhoto4.message;
        this.dogPhoto5 = dogPhoto5.message;
        this.dogPhoto6 = dogPhoto6.message;
        const strMan1 = dogPhoto.message.split('/breeds/');
        const strMan1Further = strMan1[1].split('/');
        this.dogPhotoBreed = strMan1Further[0];
        const strMan2 = dogPhoto2.message.split('/breeds/');
        const strMan2Further = strMan2[1].split('/');
        this.dogPhoto2Breed = strMan2Further[0];
        const strMan3 = dogPhoto3.message.split('/breeds/');
        const strMan3Further = strMan3[1].split('/');
        this.dogPhoto3Breed = strMan3Further[0];
        const strMan4 = dogPhoto4.message.split('/breeds/');
        const strMan4Further = strMan4[1].split('/');
        this.dogPhoto4Breed = strMan4Further[0];
        const strMan5 = dogPhoto5.message.split('/breeds/');
        const strMan5Further = strMan5[1].split('/');
        this.dogPhoto5Breed = strMan5Further[0];
        const strMan6 = dogPhoto6.message.split('/breeds/');
        const strMan6Further = strMan6[1].split('/');
        this.dogPhoto6Breed = strMan6Further[0];
        const str = ["is playing fetch", "is barking at the door", "is eating food", "is chewing her bone", "is using the bathroom", "is getting in trouble", "is growling at himself in the mirror", "is scratching", "is begging for food", "is taking a nap"]
        this.dog1Activity = str[Math.floor(Math.random()*10)]
        this.dog2Activity = str[Math.floor(Math.random()*10)]
        this.dog3Activity = str[Math.floor(Math.random()*10)]
        this.dog4Activity = str[Math.floor(Math.random()*10)]
        this.dog5Activity = str[Math.floor(Math.random()*10)]
        this.dog6Activity = str[Math.floor(Math.random()*10)]
    }
}

@observer
class TimerView extends React.Component<{appState: AppState}, {}> {
    render() {
        const previewProps: IDocumentCardPreviewProps = {
            previewImages: [
              {
                name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
                linkProps: {
                  href: 'http://bing.com',
                  target: '_blank'
                },
                previewImageSrc: this.props.appState.dogPhoto,
                width: 318,
                height: 196
              }
            ]
          };
          const previewProps2: IDocumentCardPreviewProps = {
            previewImages: [
              {
                name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
                linkProps: {
                  href: 'http://bing.com',
                  target: '_blank'
                },
                previewImageSrc: this.props.appState.dogPhoto2,
                width: 318,
                height: 196
              }
            ]
          };
          const previewProps3: IDocumentCardPreviewProps = {
            previewImages: [
              {
                name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
                linkProps: {
                  href: 'http://bing.com',
                  target: '_blank'
                },
                previewImageSrc: this.props.appState.dogPhoto3,
                width: 318,
                height: 196
              }
            ]
          };
          const previewProps4: IDocumentCardPreviewProps = {
            previewImages: [
              {
                name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
                linkProps: {
                  href: 'http://bing.com',
                  target: '_blank'
                },
                previewImageSrc: this.props.appState.dogPhoto4,
                width: 318,
                height: 196
              }
            ]
          };
          const previewProps5: IDocumentCardPreviewProps = {
            previewImages: [
              {
                name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
                linkProps: {
                  href: 'http://bing.com',
                  target: '_blank'
                },
                previewImageSrc: this.props.appState.dogPhoto5,
                width: 318,
                height: 196
              }
            ]
          };
          const previewProps6: IDocumentCardPreviewProps = {
            previewImages: [
              {
                name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
                linkProps: {
                  href: 'http://bing.com',
                  target: '_blank'
                },
                previewImageSrc: this.props.appState.dogPhoto6,
                width: 318,
                height: 196
              }
            ]
          };
        return (
            <div>
                <div>
                <h1> Dogs Viewed: {this.props.appState.timer}</h1>
                <Button onClick={this.onReset}>
                    GIVE ME MORE DOGS!
                    </Button>
                </div>
                <div className="dogs">
                    <DocumentCard className="dog1" onClickHref={"http://bing.com/search?q="+this.props.appState.dogPhotoBreed} >
                    <DocumentCardPreview {...previewProps} />
                    <DocumentCardTitle
                        title= {this.props.appState?.dogPhotoBreed}
                        shouldTruncate={true}
                        
                    />
                    <DocumentCardActivity
                    activity={this.props.appState.dog1Activity}
                    people={[{name:this.props.appState.dogPhotoBreed, profileImageSrc:this.props.appState.dogPhoto}]}
                    />
                    </DocumentCard>
                    <DocumentCard className="dog1" onClickHref={"http://bing.com/search?q="+this.props.appState.dogPhoto2Breed} >
                    <DocumentCardPreview {...previewProps2} />
                    <DocumentCardTitle
                        title= {this.props.appState?.dogPhoto2Breed}
                        shouldTruncate={true}
                    />
                    <DocumentCardActivity
                    activity={this.props.appState.dog2Activity}
                    people={[{name:this.props.appState.dogPhoto2Breed, profileImageSrc:this.props.appState.dogPhoto2}]}
                    />
                    </DocumentCard>
                    <DocumentCard className="dog1" onClickHref={"http://bing.com/search?q="+this.props.appState.dogPhoto3Breed} >
                    <DocumentCardPreview {...previewProps3} />
                    <DocumentCardTitle
                        title= {this.props.appState?.dogPhoto3Breed}
                        shouldTruncate={true}
                    />
                    <DocumentCardActivity
                    activity={this.props.appState.dog3Activity}
                    people={[{name:this.props.appState.dogPhoto3Breed, profileImageSrc:this.props.appState.dogPhoto3}]}
                    />
                    </DocumentCard>
                    <DocumentCard className="dog1" onClickHref={"http://bing.com/search?q="+this.props.appState.dogPhoto4Breed} >
                    <DocumentCardPreview {...previewProps4} />
                    <DocumentCardTitle
                        title= {this.props.appState?.dogPhoto4Breed}
                        shouldTruncate={true}
                    />
                    <DocumentCardActivity
                    activity={this.props.appState.dog4Activity}
                    people={[{name:this.props.appState.dogPhoto4Breed, profileImageSrc:this.props.appState.dogPhoto4}]}
                    />
                    </DocumentCard>
                    <DocumentCard className="dog1" onClickHref={"http://bing.com/search?q="+this.props.appState.dogPhoto5Breed} >
                    <DocumentCardPreview {...previewProps5} />
                    <DocumentCardTitle
                        title= {this.props.appState?.dogPhoto5Breed}
                        shouldTruncate={true}
                    />
                    <DocumentCardActivity
                    activity={this.props.appState.dog5Activity}
                    people={[{name:this.props.appState.dogPhoto5Breed, profileImageSrc:this.props.appState.dogPhoto5}]}
                    />
                    </DocumentCard>
                    <DocumentCard className="dog1" onClickHref={"http://bing.com/search?q="+this.props.appState.dogPhoto6Breed} >
                    <DocumentCardPreview {...previewProps6} />
                    <DocumentCardTitle
                        title= {this.props.appState?.dogPhoto6Breed}
                        shouldTruncate={true}
                    />
                    <DocumentCardActivity
                    activity={this.props.appState.dog6Activity}
                    people={[{name:this.props.appState.dogPhoto6Breed, profileImageSrc:this.props.appState.dogPhoto6}]}
                    />
                    </DocumentCard>
                </div>
            </div>
        );
     }

     onReset = () => {
         this.props.appState.resetTimer();
     }
};

const appState = new AppState();
ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));
