import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const NR_OF_BUTTONS = 5

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() page: EventEmitter<number> = new EventEmitter<number>()
  @Input() maxPage: number = 0

  currentRoute: string = ''

  currentPage: number = 1
  pageButtons: number[] = []
  isLoaded = false

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get route
    this.route.url.subscribe(segments => {
      this.currentRoute = '/' + segments.map(segment => segment.path).join('/')
    })
    
    // subscribe to page query param
    this.route.queryParamMap.subscribe(params => {
      const pageParam = params.get('page')

      if (pageParam) {
        const page = parseInt(pageParam)
        if (!isNaN(page)) {
          this.currentPage = page
          this.page.emit(page)
          this.setMiddleSectionButtons()
        }
      }
    })
  }

  ngOnChanges() {
    // if maxPage is async, this property will the change after initialization
    if (this.maxPage > 1) {
      this.setMiddleSectionButtons()
    }
  }

  setMiddleSectionButtons() {
    this.pageButtons = []
    const nrOfButtons = Math.min(NR_OF_BUTTONS, this.maxPage)

    const half = Math.floor(nrOfButtons / 2)
    // calculates which page the middle page buttons should start on to always show <NR_OF_BUTTONS> buttons
    const startPage = Math.max(1, Math.max(1, this.currentPage - half) + Math.min(0, this.maxPage - this.currentPage - half + (nrOfButtons % 2 === 0 ? 1 : 0)))

    for (let page = startPage; page < startPage + nrOfButtons; page++) {
      this.pageButtons.push(page)
    }
    this.isLoaded = true
  }

  get hidePrevButton() {
    return this.currentPage <= 1
  }

  get hideFirstPageButton() {
    return this.pageButtons[0] === 1
  }

  get hideLastPageButton() {
    return this.pageButtons[this.pageButtons.length - 1] === this.maxPage
  }

  get hideNextButton() {
    return this.currentPage >= this.maxPage
  }
}
