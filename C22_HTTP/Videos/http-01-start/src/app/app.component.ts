import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs-compat/operators/map';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    // receive data from server and subscribe to any changes in the data
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      // make data fetched posts equal to this components posts variable for displaying
      this.loadedPosts = posts;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request w/ service
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    // receive data from server and subscribe to any changes in the data
    this.postsService.fetchPosts().subscribe(posts => {
      // make data fetched posts equal to this components posts variable for displaying
      this.loadedPosts = posts;
      this.isFetching = false;
    });
  }

  private fetchPosts() {

  };

  onClearPosts() {
    // have to subscribe so that all loaded posts shown on html are deleted, too
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
}
