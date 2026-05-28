import { Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';
import './FormStyles.css';

export default function GenericListForm({
  title,
  addLabel,
  items = [],
  onAdd,
  onUpdate,
  onRemove,
  onMove,
  fields,
  itemTitle,
  emptyText,
}) {
  return (
    <div className="form-card animate-fade-in">
      <h3>
        {title}
        <button className="btn btn-primary" type="button" onClick={onAdd}>
          <Plus size={16} /> {addLabel}
        </button>
      </h3>

      {items.map((item, index) => (
        <div key={item.id} className="dynamic-item">
          <div className="dynamic-item-header">
            <h4>{itemTitle(item) || `${title.replace(/s$/, '')} ${index + 1}`}</h4>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {onMove && (
                <>
                  <button
                    className="btn btn-outline"
                    type="button"
                    onClick={() => onMove(index, 'up')}
                    disabled={index === 0}
                    aria-label={`Move item up`}
                  >
                    <ArrowUp size={16} />
                  </button>
                  <button
                    className="btn btn-outline"
                    type="button"
                    onClick={() => onMove(index, 'down')}
                    disabled={index === items.length - 1}
                    aria-label={`Move item down`}
                  >
                    <ArrowDown size={16} />
                  </button>
                </>
              )}
              <button
                className="btn-danger"
                type="button"
                onClick={() => onRemove(item.id)}
                aria-label={`Remove item`}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          <div className="form-grid">
            {fields.map((field) => (
              <div key={field.name} className={`form-group${field.fullWidth ? ' full-width' : ''}`}>
                <label>{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    value={item[field.name] || ''}
                    onChange={(e) => onUpdate(item.id, { [field.name]: e.target.value })}
                    placeholder={field.placeholder}
                    rows={field.rows || 3}
                  />
                ) : (
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    value={item[field.name] || ''}
                    onChange={(e) => onUpdate(item.id, { [field.name]: e.target.value })}
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {items.length === 0 && <p className="help-text">{emptyText || `No ${title.toLowerCase()} added yet.`}</p>}
    </div>
  );
}
