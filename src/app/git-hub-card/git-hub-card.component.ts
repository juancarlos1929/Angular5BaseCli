import { Component, OnInit, OnDestroy } from "@angular/core";
import { GitHubModel } from "../model/git-hub-model";

@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-card.component.html',
    styleUrls: ['./git-hub-card.component.css']
})
export class GitHubCardComponent implements OnInit, OnDestroy {

    gitGubData: GitHubModel;

    constructor() {
        this.gitGubData = new GitHubModel();
        this.gitGubData.avatar_url = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg';
        this.gitGubData.followers = 0;
        this.gitGubData.following = 1;
        this.gitGubData.login = 'jhontomoya';
        this.gitGubData.name = 'Jonathan Zamora';
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }
}