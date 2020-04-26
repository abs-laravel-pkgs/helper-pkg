function showCheckAllTabErrorNoty() {
    custom_noty('error', 'You have errors, Please check all tabs')
}

function showServerErrorNoty() {
    custom_noty('error', 'Something went wrong at server')
}


function showErrorNoty(res) {
    custom_noty('error', res.error);

    var errors = '';
    for (var i in res.errors) {
        errors += '<li>' + res.errors[i] + '</li>';
    }
    if (errors) {
        custom_noty('error', errors);
    }
}

function url(url) {
    if (base_url.charAt(base_url.length) == '/') {
        return base_url + url;
    } else {
        return base_url + '/' + url;
    }
}

app.directive('presetFilterSelect', function() {
    return {
        templateUrl: preset_filter_select_template_url,
        controller: function() {
            var self = this;
            self.theme = theme;
        }
    }
});

app.directive('filterBtn', function() {
    return {
        templateUrl: filter_btn_template_url,
        controller: function() {
            var self = this;
            self.theme = theme;
        }
    }
});

app.directive('deleteConfirmModal', function() {
    return {
        templateUrl: delete_confirm_modal_template_url,
        controller: function() {
            var self = this;
            self.theme = theme;
        }
    }
});

app.directive('presetFilterForm', function() {
    return {
        templateUrl: preset_filter_form_template_url,
        controller: function() {
            var self = this;
            self.theme = theme;
        }
    }
});